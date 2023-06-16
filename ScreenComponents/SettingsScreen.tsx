import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { settingStyle } from './styles/SettingStyle';
import { SettingsScreenProps } from './interfaces';

//Экран с настройками
const SettingsScreen: React.FC<SettingsScreenProps> = ({
    isEnglish,
    setIsEnglish,
    navigation
}) => {

    useEffect(() => {
        const fetchLanguage = async () => {
            try {
                const language = await AsyncStorage.getItem('isEnglish');
                if (language === 'isEnglish') {
                    setIsEnglish(true);
                } else {
                    setIsEnglish(language === 'false');
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchLanguage();
    }, []);

    const toggleLanguage = async () => {
        try {
            await AsyncStorage.setItem('isEnglish', (isEnglish).toString());
            setIsEnglish(!isEnglish);
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            <Text style={settingStyle.textStyle}>
                {!isEnglish ? 'Change Language to' : 'Изменить язык на:'}
            </Text>
            <TouchableOpacity
                style={settingStyle.button}
                onPress={toggleLanguage}>
                <Text style={settingStyle.buttonText}>
                    {!isEnglish ? 'Русский' : 'English'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;
