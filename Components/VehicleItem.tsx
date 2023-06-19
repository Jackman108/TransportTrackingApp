import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Vehicle, VehicleItemProps } from '../interfaces/interfaces';
import { listStyle } from '../styles/VehicleListStyle';

const VehicleItem = ({
    item,
    index,
    onPress,
    isNotEnglish,
    animValue,
}: VehicleItemProps): JSX.Element => {

    // Создаем анимированную версию компонента View
    const AnimatedVehicleView = Animated.createAnimatedComponent(View);

    return (
        // Обработчик нажатия на элемент списка
        <TouchableOpacity onPress={() => onPress(item)}>
            <AnimatedVehicleView
                style={[
                    // Стили для карточки транспортного средства
                    listStyle.vehicleCard,
                    {
                        opacity: animValue,
                        transform: [
                            {
                                // Анимация движения элемента по вертикали
                                translateY: animValue.interpolate({
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
                    {isNotEnglish ? item.driverNameRu : item.driverNameEn}
                </Text>
                <Text style={listStyle.category}>
                    {isNotEnglish ? item.categoryRu : item.categoryEn}
                </Text>
            </AnimatedVehicleView>
        </TouchableOpacity>
    );
};

export default VehicleItem;
