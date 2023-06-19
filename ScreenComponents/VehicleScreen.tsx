import { View, Text, Linking, TouchableOpacity, Platform } from 'react-native';
import VehicleMap from '../Components/VehicleMap';
import { VehicleStyle } from '../styles/VehicleStyle';
import { Vehicle, VehicleScreenProps } from '../interfaces/interfaces';
import VehicleMapYandex from '../Components/VehicleMapYandex';

// Экран с деталями транспортного средства
const VehicleScreen = ({
    isNotEnglish,
    route,
}: VehicleScreenProps): JSX.Element => {
    const { vehicle } = route.params as { vehicle: Vehicle };

    // Вызывает звонок к водителю
    const callDriver = () => {
        Linking.openURL(`tel:${vehicle.phoneNumber}`);
    };

    // Открывает WhatsApp для отправки сообщения водителю
    const messageDriver = () => {
        const messageRu = encodeURIComponent('Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе?');
        const messageEn = encodeURIComponent('Good afternoon, could you, please tell me what order number you have in the works now?');
        Linking.openURL(`https://api.whatsapp.com/send?phone=${vehicle.phoneNumber}&text=${isNotEnglish ? messageRu : messageEn}`);
    };

    return (
        <View style={VehicleStyle.container}>
            {/* Для запуска в web, раскомментируйте блок с VehicleMapYandex и закомментируйте VehicleMap*/}
            {/*<VehicleMapYandex latitude={vehicle.latitude} longitude={vehicle.longitude} iconImage={vehicle.iconImage} />*/}
            <VehicleMap latitude={vehicle.latitude} longitude={vehicle.longitude} iconImage={vehicle.iconImage} />
            <Text style={VehicleStyle.title}>{vehicle.name}</Text>
            <Text style={VehicleStyle.title}>
                {isNotEnglish
                    ? vehicle.categoryRu
                    : vehicle.categoryEn}
            </Text>
            <Text style={VehicleStyle.text}>
                {isNotEnglish
                    ? vehicle.driverNameRu
                    : vehicle.driverNameEn}
            </Text>
            <Text style={VehicleStyle.text}>{vehicle.phoneNumber}</Text>
            <View style={VehicleStyle.buttonContainer}>
                <TouchableOpacity style={VehicleStyle.button} onPress={callDriver}>
                    <Text style={VehicleStyle.buttonText}>
                        {isNotEnglish ? 'Позвонить' : 'Call'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={VehicleStyle.button} onPress={messageDriver}>
                    <Text style={VehicleStyle.buttonText}>
                        {isNotEnglish ? 'Написать' : 'Write'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default VehicleScreen;
