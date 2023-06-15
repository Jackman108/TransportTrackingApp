import React, { useEffect, useState } from 'react';
import { View, Text, Button, Switch, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import vehicles from '../vehicles.json';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

interface Vehicle {
    id: number;
    name: string;
    driverName: string;
    category: string;
    phoneNumber: string,
    latitude: number;
    longitude: number;
}

interface VehicleListScreenProps {
    navigation: StackNavigationProp<any>;
    route: RouteProp<any, any>;
    isEnglish: boolean;
    setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
}

const VehicleListScreen: React.FC<VehicleListScreenProps> = ({ navigation, route, isEnglish, setIsEnglish }) => {
    const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
    const [isLoading, setIsLoading] = useState(true);
    const [animValues] = useState(vehicles.map(() => new Animated.Value(0)));
    const windowWidth = Dimensions.get('window').width;


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            Animated.stagger(500, animValues.map((value) => {
                return Animated.timing(value, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                });
            })).start();
        }, 1000);

        return () => clearTimeout(timer);
    }, [isEnglish]);



    const filterVehicles = (category: string) => {
        const filtered = vehicles.filter((vehicle) => vehicle.category === category);
        setFilteredVehicles(filtered);
    };

    const navigateToVehicleScreen = (vehicle: Vehicle) => {
        navigation.navigate('Vehicle', { vehicle });
    };

    const navigateToSettingsScreen = () => {
        navigation.navigate('Settings', { isEnglish: isEnglish, setIsEnglish: setIsEnglish });
    };


    const styles = StyleSheet.create({
        vehicleCard: {
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 8,
            padding: 16,
            marginBottom: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',

        },
        vehicleName: {
            fontWeight: 'bold',
            fontSize: 16,
        },
        driverName: {
            fontSize: 14,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        category: {
            fontSize: 14,
            width: 100,
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: windowWidth * 0.05,
        },
        languageSwitch: {
            justifyContent: 'flex-end',

        },
    });


    return (
        <View>
            <Button title={isEnglish ? 'Settings' : 'Настройки'} onPress={navigateToSettingsScreen} />
            {isLoading ? (
                <Text>{isEnglish ? 'Loading...' : 'Загрузка...'}</Text>
            ) : (
                filteredVehicles.map((vehicle, index) => (
                    <TouchableOpacity key={vehicle.id} onPress={() => navigateToVehicleScreen(vehicle)}>
                        <Animated.View
                            style={[
                                styles.vehicleCard,
                                {
                                    opacity: animValues[index],
                                    transform: [
                                        {
                                            translateY: animValues[index].interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [16, 0],
                                            }),
                                        },
                                    ],
                                },
                            ]}
                        >
                            <Text style={styles.vehicleName}>{vehicle.name}</Text>
                            <Text style={styles.driverName}>{vehicle.driverName}</Text>
                            <Text style={styles.category}>{vehicle.category}</Text>
                        </Animated.View>
                    </TouchableOpacity>
                ))
            )}

            <View style={styles.buttonContainer}>
                <Button title={isEnglish ? 'Cargo' : 'Грузовой'} onPress={() => filterVehicles(isEnglish ? 'Cargo' : 'Грузовой')} />
                <Button title={isEnglish ? 'Passenger' : 'Пассажирский'} onPress={() => filterVehicles(isEnglish ? 'Passenger' : 'Пассажирский')} />
                <Button title={isEnglish ? 'Special Transport' : 'Спецтранспорт'} onPress={() => filterVehicles(isEnglish ? 'Special Transport' : 'Спецтранспорт')} />
            </View>

        </View>
    );
};

export default VehicleListScreen;

