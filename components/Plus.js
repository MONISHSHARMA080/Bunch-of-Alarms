import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, View, StyleSheet,Dimensions, Text } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function PlusIcon({props}) {
  
  const navigation = useNavigation();

  return (
    <Pressable style={styles.addButton} onPress={()=>navigation.navigate('Set alarm')}     >
      <Plus />
    </Pressable>
  );
}

export  function Plus() {
  return (
    <View style={styles.plusIcon}>
      <View style={styles.horizontalLine} />
      <View style={styles.verticalLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 40, 
    left: '50%',
    transform: [{ translateX: -50 }],
    zIndex: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 95,
    height: 95,
    borderRadius: 100,
    elevation: 10,
    backgroundColor: '#176a29',
    },
  plusIcon: {
    width: 30,
    height: 30,
  },
  horizontalLine: {
    position: 'absolute',
    top: 14,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#fff',
  },
  verticalLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 14,
    right: 14,
    width: 2,
    backgroundColor: '#fff',
  },
});
