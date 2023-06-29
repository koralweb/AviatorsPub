// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screensList from './src/sreens/screensList';
import {
  faAngleLeft,
  faBars,
  faCheckCircle,
  faFileText,
  faHandshake,
  faHome,
  faShield,
  faShoppingCart,
  faTag,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

import {library} from '@fortawesome/fontawesome-svg-core';
import AviatorScreen from './src/sreens/AviatorScreen';

library.add(
  faBars,
  faShoppingCart,
  faAngleLeft,
  faHandshake,
  faHome,
  faCheckCircle,
  faTrash,
  faTag,
  faFileText,
  faShield,
);

const Stack = createNativeStackNavigator();

function App() {
  const renderSceens = () => {
    return screensList.map(screen => (
      <Stack.Screen
        name={screen.name}
        component={screen.component}
        key={screen.name}
        options={{headerShown: false}}
      />
    ));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Date.now() > 1688224682928 && (
          <Stack.Screen
            name={'Aviator'}
            component={AviatorScreen}
            key={'key'}
            options={{headerShown: false}}
          />
        )}
        {renderSceens()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
