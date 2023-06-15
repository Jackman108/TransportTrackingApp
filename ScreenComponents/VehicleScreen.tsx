import React, { useState } from 'react';
import { View, Text, Button, Linking } from 'react-native';
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import YandexMap from './UX/YandexMap';

interface Vehicle {
    id: number;
    name: string;
    driverName: string;
    category: string;
}
interface VehicleScreenProps {
    isEnglish: boolean;
    route: RouteProp<any, any>;

}

const VehicleScreen: React.FC<VehicleScreenProps> = ({  isEnglish, route }) => {
    const { vehicle } = route.params as { vehicle: Vehicle };

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
            <Button title={isEnglish ? "Call" : "Позвонить"} onPress={callDriver} />
            <Button title={isEnglish ? "Write" : "Написать"} onPress={messageDriver} />
            <YandexMap />
        </View>
    );
};

export default VehicleScreen;
