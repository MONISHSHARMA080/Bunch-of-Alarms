import * as React from 'react';
import { View, Text } from 'react-native';
import {
  NavigationContainer, DefaultTheme,DarkTheme, useNavigation }
                    from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main';
import Dialog from './components/SetAlarm';


export default function App() {


  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme();
  console.log("---");
  console.log(scheme);
  console.log("---");


  
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Bunch of alarms" mode="modal"
      screenOptions={{
        headerStyle: { backgroundColor: "#101010" },
        headerTitleStyle: { color: 'green',fontSize:22,fontWeight:"900",} }}
        options={{ headerShown: false }}
      >
        <Stack.Screen name="Bunch of alarms" component={Main} />
        <Stack.Screen name="Set alarm" component={Dialog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

