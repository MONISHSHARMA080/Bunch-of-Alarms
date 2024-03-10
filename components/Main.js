import {  Pressable, StyleSheet, Text, View } from 'react-native';
import Header from './Header'
import PlusIcon from './Plus';
import Popup from './Popup';


export default function Main({ navigation }) {
  return (
    <View className="flex-1 bg-green-400 " >
        <Text className="text-white" >bMMMMM</Text>
        <Text className="text-white" >bMMMMM</Text>
        <Text className="text-white" >bMMMMM</Text>
        <Text className="text-white" >bMMMMM</Text>
        <Text className="text-white" >bMMMMM</Text>
        <PlusIcon  />
    </View>
  );
}
