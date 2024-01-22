import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, View, StyleSheet,Dimensions, Text, Modal } from 'react-native';
import SetAlarm from './SetAlarm';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function PlusIcon({props}) {
  
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <Pressable style={styles.addButton} 
    // onPress={()=>navigation.navigate('Set alarm')}   
    onPress={() => setModalVisible(true)}

    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <SetAlarm />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
  },
  modalView: {
    margin: 2,
    backgroundColor: '#4e524f',
    borderRadius: 30,
    padding:10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 5,
    textAlign: 'center',
  },
});
