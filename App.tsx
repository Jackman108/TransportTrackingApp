import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VehicleListScreen from './ScreenComponents/VehicleListScreen';
import VehicleScreen from './ScreenComponents/VehicleScreen';
import LanguageSwitch from './ScreenComponents/LanguageSwitch';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="VehicleList" component={VehicleListScreen} />
        <Stack.Screen name="Vehicle" component={VehicleScreen} />
        <Stack.Screen name="Settings" component={LanguageSwitch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
