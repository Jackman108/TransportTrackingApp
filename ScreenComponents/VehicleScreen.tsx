import { FC } from 'react';
import { View, Text, Linking, TouchableOpacity  } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import YandexMap from './UX/YandexMap';
import { VehicleStyle } from './styles/VehicleStyle';
import { Vehicle, VehicleScreenProps } from './interfaces';

const VehicleScreen: FC<VehicleScreenProps> = ({ isEnglish, route }) => {
    const { vehicle } = route.params as { vehicle: Vehicle };

    const callDriver = () => {
        Linking.openURL(`tel:${vehicle?.phoneNumber}`);
    };

    const messageDriver = () => {
        Linking.openURL(`https://api.whatsapp.com/send?phone=${vehicle?.phoneNumber}&text=Добрый%20день,%20подскажите%20пожалуйста,%20какой%20номер%20заказа%20у%20вас%20сейчас%20в%20работе`);
    };
    const defaultCenter: number[] = [vehicle?.latitude, vehicle?.longitude];
    const iconImage: string = vehicle?.iconImage;

    return (
        <View style={VehicleStyle.container}>
            <YandexMap defaultCenter={defaultCenter} iconImage={iconImage} />
            <Text style={VehicleStyle.title}>{vehicle?.name}</Text>
            <Text style={VehicleStyle.title}>{vehicle?.category}</Text>
            <Text style={VehicleStyle.text}>{vehicle?.driverName}</Text>
            <Text style={VehicleStyle.text}>{vehicle?.phoneNumber}</Text>
            <TouchableOpacity style={VehicleStyle.button} onPress={callDriver}>
                <Text style={VehicleStyle.buttonText}>
                    {isEnglish ? 'Call' : 'Позвонить'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={VehicleStyle.button} onPress={messageDriver}>
                <Text style={VehicleStyle.buttonText}>
                    {isEnglish ? 'Write' : 'Написать'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default VehicleScreen;
