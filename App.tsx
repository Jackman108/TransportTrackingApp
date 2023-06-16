import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VehicleListScreen from './ScreenComponents/VehicleListScreen';
import VehicleScreen from './ScreenComponents/VehicleScreen';
import SettingsScreen from './ScreenComponents/SettingsScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Vehicle List"
          options={{ title: isEnglish ? 'Vehicle List' : 'Список Транспортных Средств' }}
        >
          {(props) =>
            <VehicleListScreen {...props}
              isEnglish={isEnglish}
              setIsEnglish={setIsEnglish}
            />}
        </Stack.Screen>

        <Stack.Screen
          name="Vehicle"
          options={{ title: isEnglish ? 'Vehicle Details' : 'Детали Транспортного Средства' }}

        >
          {(props) => 
          <VehicleScreen {...props}
            isEnglish={isEnglish} />}
        </Stack.Screen>

        <Stack.Screen 
        name="Settings"
        options={{ title: isEnglish ? 'Settings' : 'Настройки' }}
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
