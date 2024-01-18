import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { View,Text, Dimensions, StyleSheet } from 'react-native';
import { TextInput, KeyboardType } from 'react-native';
import { Button,  } from 'react-native-paper';
import { getCurrentTime, getFormattedDate, getSetTime } from './utils/utils';
const windowHeight = Dimensions.get('window').height;

export default function SetAlarm() {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(getCurrentTime());
    const [endDate, setEndDate] = useState(new Date());
    const [endTime, setEndTime] = useState(getCurrentTime());
    const [inputValue, setInputValue] = useState(null);
    const onChange = (event,currentDate) => {
      setDate(currentDate);
      setTime(getSetTime(currentDate));
    };
    const onChangeEnd = (event,currentDate) => {
      setEndDate(currentDate);
      setEndTime(getSetTime(currentDate));
    };
  
    const showMode = (currentMode) => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    };
    const showModeEnd = (currentMode) => {
      DateTimePickerAndroid.open({
        value: endDate, 
        onChange: onChangeEnd,
        mode: currentMode,
        is24Hour: true,
      });
    };
  
    const showEndDatepicker = () => {
      showModeEnd('date');
    };
  
    const showEndTimepicker = () => {
      showModeEnd('time');
    };
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
    
    return (
      <View className="flex-1 bg-black   ">
        <View className="  " style={styles.container} >
          <Text className="text-white font-bold text-base ml-3 " >Select start date</Text>
          <Button  onPress={showDatepicker}  rippleColor="#33dda1"
          mode="outlined" className="m-3" textColor='white' buttonColor='#176a29'
          >
              { getFormattedDate(date.toDateString()) }
          </Button>
          <Text className="text-white font-bold text-base ml-3" >Start time</Text>
          <Button onPress={showTimepicker} title="time"  buttonColor='#176a29'
          mode="outlined" className="m-3" textColor='white' rippleColor="#33dda1"
          >
            {time}
          </Button>
          <Text className="text-white font-bold text-base ml-3" >End date</Text>
          <Button onPress={showEndDatepicker} title="time"  buttonColor='#176a29'
          mode="outlined" className="m-3" textColor='white' rippleColor="#33dda1"
          >
            {getFormattedDate(endDate.toDateString())}
          </Button>
          <Text className="text-white font-bold text-base ml-3" >End time</Text>
          <Button onPress={showEndTimepicker} title="time"  buttonColor='#176a29'
          mode="outlined" className="m-3" textColor='white' rippleColor="#33dda1"
          >
            {endTime}
          </Button>
          <Text className="text-white font-bold text-base ml-3 " >frequency</Text>
          <TextInput
            className="text-white bg-[#176a29] border-l-stone-300 m-3 p-2 pl-3 rounded-full "
            label="Number Input"
            inputMode="numeric"
            value={inputValue} // Store the input value in a state variable
            onChangeText={(text) => {
              const filteredText = text.replace(/[^0-9]/g, '');
              setInputValue(filteredText); // Update the state with filtered text
            }}
        />
        </View>  
            
    </View>
        
    );
  };


const styles = StyleSheet.create({
  container: {
     top : windowHeight/9
  },
});
