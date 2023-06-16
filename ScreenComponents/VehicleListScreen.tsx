import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import vehicles from '../vehicles.json';
import { listStyle } from './styles/VehicleListStyle';
import { Vehicle, VehicleListScreenProps } from './interfaces';

const VehicleListScreen: React.FC<VehicleListScreenProps> = ({
    navigation,
    isEnglish,
    setIsEnglish
}) => {
    const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
    const [isLoading, setIsLoading] = useState(true);
    const animValues = useRef<Animated.Value[]>([]);

    useEffect(() => {
        animValues.current = vehicles.map(() => new Animated.Value(0));

        const timer = setTimeout(() => {
            setIsLoading(false);
            Animated.stagger(500, animValues.current.map((value) => {
                return Animated.timing(value, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                });
            })).start();
        }, 1000);

        return () => clearTimeout(timer);
    }, [animValues]);

    const filterVehicles = (category: string) => {
        const filtered = vehicles.filter((vehicle) => vehicle.category === category);
        setFilteredVehicles(filtered);
    };

    const navigateToVehicleScreen = (vehicle: Vehicle) => {
        navigation.navigate('Vehicle', { vehicle });
    };

    const navigateToSettingsScreen = () => {
        navigation.navigate('Settings', { setIsEnglish: setIsEnglish, isEnglish: isEnglish });
    };

    return (
        <View>
            <TouchableOpacity style={listStyle.button} onPress={navigateToSettingsScreen}            >
                <Text style={listStyle.buttonText}>
                    {isEnglish ? 'Settings' : 'Настройки'}
                </Text>
            </TouchableOpacity>

            {isLoading ? (
                <Text>{isEnglish ? 'Loading...' : 'Загрузка...'}</Text>
            ) : (
                filteredVehicles.map((vehicle, index) => (
                    <TouchableOpacity
                        key={vehicle.id}
                        onPress={() => navigateToVehicleScreen(vehicle)}
                    >
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
                            <Text style={listStyle.vehicleName}>{vehicle.name}</Text>
                            <Text style={listStyle.driverName}>{vehicle.driverName}</Text>
                            <Text style={listStyle.category}>
                                {isEnglish
                                    ? (() => {
                                        switch (vehicle.category) {
                                            case 'Грузовой':
                                                return 'Cargo';
                                            case 'Пассажирский':
                                                return 'Passenger';
                                            case 'Спецтранспорт':
                                                return 'Special Transport';
                                            default:
                                                return '';
                                        }
                                    })()
                                    : vehicle.category}
                            </Text>
                        </Animated.View>
                    </TouchableOpacity>
                ))
            )}
            <View style={listStyle.buttonContainer}>
                <TouchableOpacity
                    style={listStyle.button}
                    onPress={() => filterVehicles('Грузовой')}
                >
                    <Text style={listStyle.buttonText}>
                        {isEnglish ? 'Cargo' : 'Грузовой'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={listStyle.button}
                    onPress={() => filterVehicles('Пассажирский')}
                >
                    <Text style={listStyle.buttonText}>
                        {isEnglish ? 'Passenger' : 'Пассажирский'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={listStyle.button}
                    onPress={() => filterVehicles('Спецтранспорт')}
                >
                    <Text style={listStyle.buttonText}>
                        {isEnglish ? 'Special Transport' : 'Спецтранспорт'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default VehicleListScreen;

