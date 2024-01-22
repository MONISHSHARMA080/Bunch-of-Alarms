import * as React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer}from '@react-navigation/native';
// import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main';
import Dialog from './components/SetAlarm';


export default function App() {


  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Bunch of alarms" mode="modal"
      screenOptions={{
        headerStyle: { backgroundColor: "#101010" },
        headerTitleStyle: { color: 'green',fontSize:22,fontWeight:"900",} }}
        options={{ headerShown: true }}
      >
        <Stack.Screen name="Bunch of alarms" component={Main} />
        <Stack.Screen name="Set alarm" component={Dialog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// dark (boolean): Whether this is a dark theme or a light theme
// colors (object): Various colors used by react navigation components:

//     primary (string): The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.
//     background (string): The color of various backgrounds, such as background color for the screens.

// const MyTheme = {
//   dark: false,
//   colors: {
//     primary: 'rgb(255, 45, 85)',
//     background: 'rgb(242, 242, 242)',
//     card: 'rgb(255, 255, 255)',
//     text: 'rgb(28, 28, 30)',
//     border: 'rgb(199, 199, 204)',
//     notification: 'rgb(255, 69, 58)',
//   },
// };