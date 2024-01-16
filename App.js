import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import { SafeAreaView } from 'react-native-safe-area-context';
import PlusIcon, { Plus } from './components/Plus';
import  Dialog from './components/Dialog';


export default function App() {
  return (
      <SafeAreaView className="bg-gray-900  flex-1 ">
        <View className=" justify-center self-left ml-4" >
          <Header />
        </View>
        <Dialog />
        <PlusIcon />
        
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
});
