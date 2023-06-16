import { FC } from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import YandexMap from './UX/YandexMap';
import { VehicleStyle } from './styles/VehicleStyle';
import { Vehicle, VehicleScreenProps } from './interfaces';

// Экран с деталями транспортного средства
const VehicleScreen: FC<VehicleScreenProps> = ({ isEnglish, route }) => {
    const { vehicle } = route.params as { vehicle: Vehicle };

    // Вызывает звонок к водителю
    const callDriver = () => {
        Linking.openURL(`tel:${vehicle.phoneNumber}`);
    };

    // Открывает WhatsApp для отправки сообщения водителю
    const messageDriver = () => {
        Linking.openURL(`https://api.whatsapp.com/send?phone=${vehicle.phoneNumber}&text=Добрый%20день,%20подскажите%20пожалуйста,%20какой%20номер%20заказа%20у%20вас%20сейчас%20в%20работе`);
    };

    return (
        <View style={VehicleStyle.container}>
            <YandexMap defaultCenter={[vehicle.latitude, vehicle.longitude]} iconImage={vehicle.iconImage} />
            <Text style={VehicleStyle.title}>{vehicle.name}</Text>
            <Text style={VehicleStyle.title}>
                                {!isEnglish
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
            <Text style={VehicleStyle.text}>{vehicle.driverName}</Text>
            <Text style={VehicleStyle.text}>{vehicle.phoneNumber}</Text>
            <View style={VehicleStyle.buttonContainer}>
            <TouchableOpacity style={VehicleStyle.button} onPress={callDriver}>
                <Text style={VehicleStyle.buttonText}>
                    {!isEnglish ? 'Call' : 'Позвонить'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={VehicleStyle.button} onPress={messageDriver}>
                <Text style={VehicleStyle.buttonText}>
                    {!isEnglish ? 'Write' : 'Написать'}
                </Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

export default VehicleScreen;
