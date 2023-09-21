import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TabScreen1 from './components/TabScreen1';
import TabScreen2 from './components/TabScreen2';
import TabScreen3 from './components/TabScreen3';
import TabScreen4 from './components/TabScreen4';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Cliques"
          component={TabScreen1}
        />
        <Tab.Screen
          name="Quadrados"
          component={TabScreen2} />
        <Tab.Screen
          name="Input"
          component={TabScreen3} />
        <Tab.Screen
          name="Calculadora"
          component={TabScreen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
