import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';

interface SettingsScreenProps {
    isEnglish: boolean;
    setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
    navigation: StackNavigationProp<any>;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ isEnglish, setIsEnglish, navigation }) => {
    const toggleLanguage = async () => {
        try {
            await AsyncStorage.setItem('isEnglish', (!isEnglish).toString());
            setIsEnglish(!isEnglish);
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const fetchLanguage = async () => {
            try {
                const language = await AsyncStorage.getItem('isEnglish');
                setIsEnglish(language === 'true');
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchLanguage();
    }, []);
    return (
        <View>
            <Text>{isEnglish ? 'Change Language' : 'Изменить язык'}</Text>
            <Button onPress={toggleLanguage} title={isEnglish ? 'Русский' : 'English'} />
        </View>
    );
};

export default SettingsScreen;
