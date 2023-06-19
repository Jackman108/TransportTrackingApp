import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VehicleListScreen from './ScreenComponents/VehicleListScreen';
import VehicleScreen from './ScreenComponents/VehicleScreen';
import SettingsScreen from './ScreenComponents/SettingsScreen';

const Stack = createStackNavigator();

/**
 * Главный компонент приложения для управления навигацией между экранами.
 */
const App: React.FC = (): JSX.Element => {
  const [isNotEnglish, setIsNotEnglish] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Экран со списком транспортных средств */}
        <Stack.Screen
          name="Vehicle List"
          options={{
            title: isNotEnglish ? 'Список Транспортных Средств' : 'Vehicle List',
            headerTitleAlign: 'center',
          }}
        >
          {(props) =>
            <VehicleListScreen {...props}
              isNotEnglish={isNotEnglish}
            />}
        </Stack.Screen>

        {/* Экран с деталями транспортного средства */}
        <Stack.Screen
          name="Vehicle"
          options={{
            title: isNotEnglish ? 'Детали ТС' : 'Vehicle Details',
            headerTitleAlign: 'center'
          }}
        >
          {(props) =>
            <VehicleScreen {...props}
              isNotEnglish={isNotEnglish}
            />}
        </Stack.Screen>

        {/* Экран с настройками */}
        <Stack.Screen
          name="Settings"
          options={{
            title: isNotEnglish ? 'Настройки' : 'Settings',
            headerTitleAlign: 'center'
          }}
        >
          {(props) =>
            <SettingsScreen {...props}
              isNotEnglish={isNotEnglish}
              setIsNotEnglish={setIsNotEnglish}
            />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
