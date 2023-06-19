import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Animated } from 'react-native';
/**
 * Интерфейс Vehicle представляет данные о транспортном средстве.
 */
export interface Vehicle {
    id: number; // Уникальный идентификатор ТС
    name: string; // Название ТС
    driverNameRu: string; // Имя водителя
    driverNameEn: string; // Имя водителя
    categoryRu: string; // Категория ТС
    categoryEn: string; // Категория ТС
    phoneNumber: string; // Номер телефона
    latitude: number; // Широта
    longitude: number; // Долгота
    iconImage: string; // Ссылка на иконку ТС
}

/**
 * Интерфейс VehicleScreenProps содержит параметры экрана с информацией о ТС.
 */
export interface VehicleScreenProps {
    isNotEnglish: boolean; // Флаг, указывающий на текущий язык приложения
    route: RouteProp<any, any>; // Маршрут экрана
}

/**
 * Интерфейс VehicleListScreenProps содержит параметры экрана со списком ТС.
 */
export interface VehicleListScreenProps {
    navigation: StackNavigationProp<any>; // Навигационный объект для перехода между экранами
    route: RouteProp<any, any>; // Маршрут экрана
    isNotEnglish: boolean; // Флаг, указывающий на текущий язык приложения
}

/**
 * Интерфейс SettingsScreenProps содержит параметры экрана с настройками.
 */
export interface SettingsScreenProps {
    isNotEnglish: boolean; // Флаг, указывающий на текущий язык приложения
    setIsNotEnglish: React.Dispatch<React.SetStateAction<boolean>>; // Функция для изменения флага языка
    navigation: StackNavigationProp<any>; // Навигационный объект для перехода между экранами
}

/**
 * Интерфейс VehicleMapProps содержит пропсы компонента VehicleMap, 
 * отображающего местоположение ТС на карте.
 */
export interface VehicleMapProps {
    latitude: number; // Координаты широта
    longitude: number; // Координаты долгота
    iconImage: string; // Ссылка на иконку ТС
}

/**
 * Интерфейс VehicleItemProps содержит пропсы компонента VehicleItem,  
 * представляющего отдельный элемент списка ТС.
 */
export interface VehicleItemProps {
    item: Vehicle; // Данные о ТС.
    index: number; // Индекс элемента в списке.
    onPress: (vehicle: Vehicle) => void; // Функция, вызываемая при нажатии на элемент списка.
    isNotEnglish: boolean; // Флаг, указывающий на текущий язык приложения.
    animValue: Animated.Value; // Значение для анимации.
}

/**
 * Интерфейс ControlButtonProps содержит пропсы компонента ControlButton, 
 * представляющего кнопку управления.
 */
export interface ControlButtonProps {
    onPress: () => void; // Функция, вызываемая при нажатии на кнопку.
    text: string; // Текст кнопки.
}