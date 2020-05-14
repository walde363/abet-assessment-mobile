//l]5g8QAbxSSrr7NMs2fePoCCBejD:t@_

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './App/Components/Welcome';
import Options from './App/Components/Options';
import Login from './App/Components/Login';
import { MenuProvider } from 'react-native-popup-menu';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// For navigation
const Stack = createStackNavigator();

// const options = {
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json',
//     'Content-type': 'application/json'
//   }
// }

export default class App extends React.Component {
 

  render() {
    return (

      <MenuProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none" initialRouteName="Welcome" >

            <Stack.Screen
              name="Welcome"
              component={Welcome}
            />
            <Stack.Screen
              name="Options"
              component={Options}
              options={{ gestureEnabled: false }} />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ gestureEnabled: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </MenuProvider>
    );
  }
}
