import { useEffect, useState, useRef, useCallback } from 'react';
import { View, Text, TouchableOpacity, Animated, FlatList, Image, ScrollView } from 'react-native';
import vehicles from '../vehicles.json';
import { listStyle } from '../styles/VehicleListStyle';
import { Vehicle, VehicleListScreenProps } from '../interfaces/interfaces';
import VehicleItem from '../Components/VehicleItem';
import ControlButton from '../Components/ControlButton';


// Экран со списком транспортных средств
const VehicleListScreen = ({
    navigation,
    isNotEnglish
}: VehicleListScreenProps): JSX.Element => {
    // Состояния
    const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
    const [isLoading, setIsLoading] = useState(true);
    const animValues = useRef<Array<Animated.Value>>([]);

    // Константы для текстовых элементов
    const resetIcon = 'https://cdn-icons-png.flaticon.com/128/5053/5053296.png';
    const cargoButtonText = isNotEnglish ? 'Грузовой' : 'Cargo';
    const specialButtonText = isNotEnglish ? 'Специальный' : 'Special';
    const passengerButtonText = isNotEnglish ? 'Пассажирский' : 'Passenger';
    const settingsButtonText = isNotEnglish ? 'Настройки' : 'Settings';
    const loadingButtonText = isNotEnglish ? 'Загрузка...' : 'Loading...';

    // Анимация карточек транспортных средств
    const animateVehicleCards = () => {
        const animationPromises = animValues.current.map((value) =>
            Animated.timing(value, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            })
        );

        // Оптимизированная анимация с вычислением задержки
        Animated.stagger(animationPromises.length * 20, animationPromises).start();
    };

    useEffect(() => {
        // Создаем анимированные значения для карточек транспортных средств
        animValues.current = vehicles.map(() => new Animated.Value(0));

        // Имитация загрузки данных
        const timer = setTimeout(() => {
            setIsLoading(false);
            animateVehicleCards();
        }, 1000);
        return () => clearTimeout(timer);
    }, [vehicles, isNotEnglish]);

    // Фильтрация транспортных средств по категории
    const filterVehicles = useCallback(
        (category: string) => {
            const filtered = vehicles.filter((vehicle) => {
                return !isNotEnglish ? vehicle.categoryEn === category : vehicle.categoryRu === category;
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
        navigation.navigate('Settings', { isNotEnglish });
    };

    // Функция для рендеринга элемента списка транспортных средств
    const renderVehicleItem = ({ item, index }: { item: Vehicle; index: number }) => {
        return (
            <VehicleItem
                item={item}
                index={index}
                onPress={navigateToVehicleScreen}
                isNotEnglish={isNotEnglish}
                animValue={animValues.current[index]}
            />
        );
    };

    return (
        <View style={listStyle.container}>
            <ControlButton
                onPress={navigateToSettingsScreen}
                text={settingsButtonText}
            />
            <View style={listStyle.header}>
                <TouchableOpacity
                    style={listStyle.resetButton}
                    onPress={() => setFilteredVehicles(vehicles)}
                >
                    <Image
                        source={{ uri: resetIcon }}
                        style={listStyle.resetIcon}
                    />
                </TouchableOpacity>
            </View>

            {!isLoading ? (
                // Если загрузка завершена, отображаем список транспортных средств
                <ScrollView>
                    {filteredVehicles.map((vehicle, index) => (
                        <View key={vehicle.id}>
                            {renderVehicleItem({ item: vehicle, index })}
                        </View>
                    ))}
                </ScrollView>
            ) : (

                <Text style={listStyle.loading}>
                    {loadingButtonText}
                </Text>

            )}
            <View style={listStyle.buttonContainer}>
                 {/* Кнопки для фильтрации по категориям */}
                <ControlButton
                    onPress={() => filterVehicles(cargoButtonText)}
                    text={cargoButtonText}
                />
                <ControlButton
                    onPress={() => filterVehicles(passengerButtonText)}
                    text={passengerButtonText}
                />
                <ControlButton
                    onPress={() => filterVehicles(specialButtonText)}
                    text={specialButtonText}
                />
            </View>
        </View>
    );
};

export default VehicleListScreen;

