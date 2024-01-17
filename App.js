import { Pressable, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import { SafeAreaView } from 'react-native-safe-area-context';
import PlusIcon from './components/Plus';
import  Dialog from './components/Dialog';
import SwipeModal from './components/Modal';
import { useState } from 'react';


export default function App() {
  const [plusIconClicked , setPlusIconClicked] = useState(false)
  plusIocnclick = { setPlusIconClicked: setPlusIconClicked, plusIconClicked:plusIconClicked}

  return (
    <SafeAreaView className="bg-gray-100  flex-1 ">
        <View className=" justify-center self-left ml-4" >
          <Header />
        </View>
        <Dialog />
        {plusIconClicked ? (<SwipeModal />) : null  }
        <PlusIcon props={plusIocnclick} />
        
      </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
// },
// });
