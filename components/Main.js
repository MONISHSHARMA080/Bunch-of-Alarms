import { Pressable, StyleSheet, Text, View } from 'react-native';
import Header from './Header'
import PlusIcon from './Plus';


export default function Main({ navigation }) {
  return (
    <View className="flex-1 bg-black "  >
        <PlusIcon  />
    </View>
  );
}
