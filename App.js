import { StatusBar } from 'expo-status-bar';
import {     StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
      <SafeAreaView className="bg-gray-900  flex-1 ">
        <View className="justify-center self-left ml-4" >
          <Header />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
  // container: {
  //   flex: 1,
  //   backgroundColor: '#000',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
