import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

/**
 * Интерфейс для представления данных о ТС.
 */
export interface Vehicle {
    id: number; // Уникальный идентификатор ТС
    name: string; // Название ТС
    driverName: string; // Имя водителя
    category: string; // Категория ТС
    phoneNumber: string; // Номер телефона
    latitude: number; // Широта
    longitude: number; // Долгота
    iconImage: string; // Ссылка на иконку ТС
}

/**
 * Интерфейс параметров экрана с информацией о ТС.
 */
export interface VehicleScreenProps {
    isEnglish: boolean; // Флаг, указывающий на текущий язык приложения
    route: RouteProp<any, any>; // Маршрут экрана
}

/**
 * Интерфейс параметров экрана со списком ТС.
 */
export interface VehicleListScreenProps {
    navigation: StackNavigationProp<any>; // Навигационный объект для перехода между экранами
    route: RouteProp<any, any>; // Маршрут экрана
    isEnglish: boolean; // Флаг, указывающий на текущий язык приложения
    setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>; // Функция для изменения флага языка
}

/**
 * Интерфейс параметров экрана с настройками.
 */
export interface SettingsScreenProps {
    isEnglish: boolean; // Флаг, указывающий на текущий язык приложения
    setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>; // Функция для изменения флага языка
    navigation: StackNavigationProp<any>; // Навигационный объект для перехода между экранами
}

/**
 * YandexMapProps интерфейс для пропсов компонента YandexMap
 */
export interface YandexMapProps {
    defaultCenter: number[];// Координаты ТС
    iconImage: string;// Ссылка на иконку ТС
}