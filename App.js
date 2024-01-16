import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

// npm i react-native-alarm-manager


export default function App() {
  return (
    <View className="bg-slate-800 items-center justify-center flex-1  "  >
      <Text className="text-xl text-orange-400 " >Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
