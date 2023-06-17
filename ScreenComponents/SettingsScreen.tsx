import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { settingStyle } from '../styles/SettingStyle';
import { SettingsScreenProps } from '../interfaces/interfaces';

//Экран с настройками
const SettingsScreen: React.FC<SettingsScreenProps> = ({
    isNotEnglish,
    setIsNotEnglish,
    navigation
}) => {

    // Функция для переключения языка
    const toggleLanguage = useCallback(async () => {
        try {

            // Сохраняем новое значение выбранного языка в хранилище AsyncStorage
            await AsyncStorage.setItem('isEnglish', String(isNotEnglish));

            // Изменяем значение выбранного языка в состоянии компонента
            setIsNotEnglish((prevIsEnglish: boolean) => !prevIsEnglish);

            // Возвращаемся на предыдущий экран
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    }, [isNotEnglish, setIsNotEnglish, navigation]);


    return (
        <View style={settingStyle.container}>
            <Text style={settingStyle.textStyle}>
                {!isNotEnglish ? 'Change Language to' : 'Изменить язык на:'}
            </Text>
            <TouchableOpacity
                style={settingStyle.button}
                onPress={toggleLanguage}>
                <Text style={settingStyle.buttonText}>
                    {!isNotEnglish ? 'Русский' : 'English'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;
