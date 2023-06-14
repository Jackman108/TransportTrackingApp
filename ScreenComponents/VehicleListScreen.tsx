import React, { useEffect, useState } from 'react';
import { View, Text, Button, Switch, TouchableOpacity } from 'react-native';
import vehicles from '../vehicles.json';
import { StackNavigationProp } from '@react-navigation/stack';

interface Vehicle {
    id: number;
    name: string;
    driverName: string;
    category: string;
}

const VehicleListScreen: React.FC<{ navigation: StackNavigationProp<any> }> = ({ navigation }) => {
    const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
    const [isMapMode, setIsMapMode] = useState(false);

    const navigateToVehicleScreen = (vehicle: Vehicle) => {
        navigation.navigate('Vehicle', { vehicle });
    };

    const filterVehicles = (category: string) => {
        const filtered = vehicles.filter((vehicle) => vehicle.category === category);
        setFilteredVehicles(filtered);
    };

    const toggleMapMode = () => {
        setIsMapMode(!isMapMode);
    };

    return (
        <View>
            <Text>Список Транспортных Средств</Text>
            {filteredVehicles.map((vehicle) => (
                <TouchableOpacity
                    key={vehicle.id}
                    onPress={() => navigateToVehicleScreen(vehicle)}
                >
                    <View
                        key={vehicle.id}
                    >
                        <Text>{vehicle.name}</Text>
                        <Text>{vehicle.driverName}</Text>
                        <Text>{vehicle.category}</Text>
                    </View>
                </TouchableOpacity>
            ))}
            <Button title="Применить (Грузовой)" onPress={() => filterVehicles('Грузовой')} />
            <Button title="Применить (Пассажирский)" onPress={() => filterVehicles('Пассажирский')} />
            <Button title="Применить (Спецтранспорт)" onPress={() => filterVehicles('Спецтранспорт')} />
            <Switch value={isMapMode} onValueChange={toggleMapMode} />
        </View>
    );
};

export default VehicleListScreen;