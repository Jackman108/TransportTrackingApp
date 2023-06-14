import React from 'react';
import { View, Text, Button, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { RouteProp } from '@react-navigation/native';
import YandexMap from './UX/YandexMap';

interface Vehicle {
    id: number;
    name: string;
    driverName: string;
    category: string;
}

const VehicleScreen: React.FC<{ route: RouteProp<any, 'Vehicle'> }> = ({ route }) => {
    const { vehicle } = route.params || {};

    const callDriver = () => {
        Linking.openURL(`tel:${driverPhoneNumber}`);
    };

    const messageDriver = () => {
        Linking.openURL(`https://api.whatsapp.com/send?phone=${driverPhoneNumber}&text=Добрый%20день,%20подскажите%20пожалуйста,%20какой%20номер%20заказа%20у%20вас%20сейчас%20в%20работе`);
    };

    const driverPhoneNumber = '+123456789000';

    return (
        <View>
            <Text>{vehicle?.name}</Text>
            <Text>{vehicle?.category}</Text>
            <Text>{vehicle?.driverName}</Text>
            <Button title="Позвонить" onPress={callDriver} />
            <Button title="Написать" onPress={messageDriver} />
            
                <YandexMap />
            
        </View>
    );
};

export default VehicleScreen;
