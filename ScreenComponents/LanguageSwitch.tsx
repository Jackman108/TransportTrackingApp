import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

const LanguageSwitch: React.FC = () => {
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        setIsEnglish(!isEnglish);
    };

    return (
        <View>
            <Text>Настройки языка/ Language Settings </Text>
            <Switch value={isEnglish} onValueChange={toggleLanguage} />
        </View>
    );
};

export default LanguageSwitch;
