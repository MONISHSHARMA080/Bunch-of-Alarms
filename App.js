import { StatusBar } from 'expo-status-bar';
import {   SafeAreaViewComponent, StyleSheet, Text, View } from 'react-native';
// import { NativeWindStyleSheet } from "nativewind";
import Header from './components/Header'
// npm i react-native-alarm-manager


export default function App() {
  return (
        <>
      <View className="bg-gray-900  flex-1   "  >
        <View className="justify-center self-left ml-5 mt-12" >
          <Header />
        </View>
      </View>
      </>
  );
}

// NativeWindStyleSheet.setOutput({
//   default : "native",
// });

// const styles =t 12tyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
