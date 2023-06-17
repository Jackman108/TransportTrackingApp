import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity, Animated, FlatList, Image } from 'react-native';
import vehicles from '../vehicles.json';
import { listStyle } from '../styles/VehicleListStyle';
import { Vehicle, VehicleListScreenProps } from '../interfaces/interfaces';

// Экран со списком транспортных средств
const VehicleListScreen: React.FC<VehicleListScreenProps> = ({
    navigation,
    isNotEnglish,
    setIsNotEnglish
}) => {
    const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
    const [isLoading, setIsLoading] = useState(true);
    const animValues = useRef<Animated.Value[]>([]);

    useEffect(() => {
        // Создаем анимированные значения для карточек транспортных средств
        animValues.current = vehicles.map(() => new Animated.Value(0));

        // Имитация загрузки данных
        const timer = setTimeout(() => {
            setIsLoading(false);
            const animationPromises = animValues.current.map((value) =>
                Animated.timing(value, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                })
            );

            // Оптимизированная анимация с вычислением задержки
            Animated.stagger(animationPromises.length * 20, animationPromises).start();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    // Фильтрация транспортных средств по категории
    const filterVehicles = useCallback(
        (category: string) => {
            const filtered = vehicles.filter((vehicle) => {
                return isNotEnglish ? vehicle.categoryEn === category : vehicle.categoryRu === category;
            });
            setFilteredVehicles(filtered);
        },
        [vehicles, isNotEnglish]
    );

    // Переход на экран с деталями транспортного средства
    const navigateToVehicleScreen = (vehicle: Vehicle) => {
        navigation.navigate('Vehicle', { vehicle });
    };

    // Переход на экран с настройками
    const navigateToSettingsScreen = () => {
        navigation.navigate('Settings', { setIsEnglish: setIsNotEnglish, isEnglish: isNotEnglish });
    };

    return (
        <View style={listStyle.container}>
            <TouchableOpacity style={listStyle.button} onPress={navigateToSettingsScreen}            >
                <Text style={listStyle.buttonText}>
                    {isNotEnglish ? 'Настройки' : 'Settings'}
                </Text>
            </TouchableOpacity>

            <View style={listStyle.header}>
                <TouchableOpacity
                    style={listStyle.resetButton}
                    onPress={() => setFilteredVehicles(vehicles)}
                >
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5053/5053296.png' }}
                        style={listStyle.resetIcon}
                    />
                </TouchableOpacity>
            </View>

            {!isLoading ? (
                <FlatList
                    data={filteredVehicles}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => navigateToVehicleScreen(item)}>
                            <Animated.View
                                style={[
                                    listStyle.vehicleCard,
                                    {
                                        opacity: animValues.current[index],
                                        transform: [
                                            {
                                                translateY: animValues.current[index].interpolate({
                                                    inputRange: [0, 1],
                                                    outputRange: [16, 0],
                                                }),
                                            },
                                        ],
                                    },
                                ]}
                            >
                                <Text style={listStyle.vehicleName}>{item.name}</Text>
                                <Text style={listStyle.driverName}>
                                    {isNotEnglish
                                        ? item.driverNameRu
                                        : item.driverNameEn}
                                </Text>
                                <Text style={listStyle.category}>
                                    {isNotEnglish
                                        ? item.categoryRu
                                        : item.categoryEn}
                                </Text>
                            </Animated.View>
                        </TouchableOpacity>
                    )}
                />
            ) : (

                <Text style={listStyle.loading}>
                    {isNotEnglish ? 'Загрузка...' : 'Loading...'}
                </Text>

            )}
            <View style={listStyle.buttonContainer}>

                <TouchableOpacity
                    style={listStyle.button}
                    onPress={() => filterVehicles(isNotEnglish ? 'Cargo' : 'Грузовой')}
                >
                    <Text style={listStyle.buttonText}>
                        {!isNotEnglish ? 'Cargo' : 'Грузовой'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={listStyle.button}
                    onPress={() => filterVehicles(isNotEnglish ? 'Passenger' : 'Пассажирский')}
                >
                    <Text style={listStyle.buttonText}>
                        {!isNotEnglish ? 'Passenger' : 'Пассажирский'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={listStyle.button}
                    onPress={() => filterVehicles(isNotEnglish ? 'Special' : 'Спецтранспорт')}
                >
                    <Text style={listStyle.buttonText}>
                        {!isNotEnglish ? 'Special' : 'Специальный'}
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default VehicleListScreen;

