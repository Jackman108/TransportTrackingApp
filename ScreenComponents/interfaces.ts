import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface Vehicle {
    id: number;
    name: string;
    driverName: string;
    category: string;
    phoneNumber: string;
    latitude: number;
    longitude: number;
    iconImage: string;
}

export interface VehicleScreenProps {
    isEnglish: boolean;
    route: RouteProp<any, any>;
}

export interface VehicleListScreenProps {
    navigation: StackNavigationProp<any>;
    route: RouteProp<any, any>;
    isEnglish: boolean;
    setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SettingsScreenProps {
    isEnglish: boolean;
    setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
    navigation: StackNavigationProp<any>;
}