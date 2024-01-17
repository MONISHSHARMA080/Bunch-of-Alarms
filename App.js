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

  return (
    <NavigationContainer  theme={scheme === 'dark' ? DarkTheme : DefaultTheme} >
      <Stack.Navigator initialRouteName="Bunch of alarms" 
      screenOptions={{
        headerMode: 'screen',
        headerStyle: { backgroundColor: "#090909" },
        headerTitleStyle: { color: 'green',fontSize:26,fontWeight:"900",} }}
        options={{ headerShown: false }}
      >
        <Stack.Screen name="Bunch of alarms" component={Main} />
        <Stack.Screen name="Set alarm" component={Dialog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

