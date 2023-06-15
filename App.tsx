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
        >
          {(props) =>
            <VehicleListScreen {...props}
              isEnglish={isEnglish}
              setIsEnglish={setIsEnglish}
            />}
        </Stack.Screen>

        <Stack.Screen
          name= "Vehicle"
        >
          {(props) => <VehicleScreen {...props}
            isEnglish={isEnglish} />}
        </Stack.Screen>

        <Stack.Screen name="Settings">
          {(props) => <SettingsScreen {...props}
            isEnglish={isEnglish}
            setIsEnglish={setIsEnglish}
          />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
