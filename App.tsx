import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VehicleListScreen from './ScreenComponents/VehicleListScreen';
import VehicleScreen from './ScreenComponents/VehicleScreen';
import SettingsScreen from './ScreenComponents/SettingsScreen';

const Stack = createStackNavigator();

/**
 * Главный компонент приложения для управления навигацией между экранами.
 */
const App: React.FC = () => {
  const [isEnglish, setIsEnglish] = useState(false); // Изменили значение по умолчанию на false

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Экран со списком транспортных средств */}
        <Stack.Screen
          name="Vehicle List"
          options={{ title: isEnglish ? 'Список Транспортных Средств' : 'Vehicle List' }}
        >
          {(props) =>
            <VehicleListScreen {...props}
              isEnglish={isEnglish}
              setIsEnglish={setIsEnglish}
            />}
        </Stack.Screen>

        {/* Экран с деталями транспортного средства */}
        <Stack.Screen
          name="Vehicle"
          options={{ title: isEnglish ? 'Детали Транспортного Средства' : 'Vehicle Details' }}

        >
          {(props) =>
            <VehicleScreen {...props}
              isEnglish={isEnglish} />}
        </Stack.Screen>

        {/* Экран с настройками */}
        <Stack.Screen
          name="Settings"
          options={{ title: isEnglish ? 'Настройки' : 'Settings' }}
        >
          {(props) =>
            <SettingsScreen {...props}
              isEnglish={isEnglish}
              setIsEnglish={setIsEnglish}
            />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
