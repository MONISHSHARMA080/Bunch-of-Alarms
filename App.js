import React, { useState } from 'react';
import { View, Text, NativeModules } from 'react-native';
import {NavigationContainer}from '@react-navigation/native';
// import { useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main';
import Dialog from './components/SetAlarm';


export default function App() {
  const Stack = createNativeStackNavigator();
  const {CalendarModule} = NativeModules;
  let a = async ()=>{

    // console.log(await CalendarModule.createCalendarEvent("bbb","jjj"));
    
  }
  a()
  
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Bunch of alarms" mode="modal"
      screenOptions={{
        headerStyle: { backgroundColor: "#0A0A0A" },
        headerTitleStyle: { color: 'green',fontSize:22,fontWeight:"900",} }}
        options={{ headerShown: true }}
      >
        <Stack.Screen name="Bunch of alarms" component={Main} />
        <Stack.Screen name="Set alarm" component={Dialog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}