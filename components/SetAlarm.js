import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { View,Text, Dimensions, StyleSheet } from 'react-native';
import { TextInput, KeyboardType } from 'react-native';
import { Button,  } from 'react-native-paper';
import { bunchofAlarm, getCurrentTime, getFormattedDate } from './utils/utils';
const windowHeight = Dimensions.get('window').height;

export default function SetAlarm() {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(getCurrentTime());
    const [endDate, setEndDate] = useState(new Date());
    const [endTime, setEndTime] = useState(getCurrentTime());
    const [inputValue, setInputValue] = useState(null);
    const onChange = (event,currentDate) => {
      setDate(currentDate);
      setTime(getCurrentTime(currentDate));
    };
    const onChangeEnd = (event,currentDate) => {
      setEndDate(currentDate);
      setEndTime(getCurrentTime(currentDate));
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
      <View className="flex-1 bg-black p-14 rounded-3xl ">
        <View className="top-14" >
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
          <Text className="text-white font-bold text-base ml-3 " >frequency</Text>
          <TextInput
            className="text-white bg-[#176a29] border-l-stone-300 m-3 p-2 pl-3 rounded-full "
            label="Number Input"
            inputMode="numeric"
            placeholder="Enter frequency"
            placeholderTextColor={{color:"#fff"}}
            value={inputValue} 
            onChangeText={(text) => {
              const filteredText = text.replace(/[^0-9]/g, '');
              setInputValue(filteredText); 
            }}
        />
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
        <Button onPress={bunchofAlarm} title="time"  buttonColor='#176a29'
          mode="outlined" className="m-3 mt-4" textColor='white' rippleColor="#33dda1"
          
          >schedule</Button>
        </View>   
    </View> 
    );
  };


const styles = StyleSheet.create({
  container: {
     top : windowHeight/9
  },
});
