import RNDateTimePicker, {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { View,Text } from 'react-native';
import { Button } from 'react-native-paper';
import { getCurrentTime, getSetTime } from './utils/utils';

export default function SetAlarm() {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(getCurrentTime());
    
    const onChange = (event,currentDate) => {
      setDate(currentDate);
      setTime(getSetTime(currentDate));
    };
  
    const showMode = (currentMode) => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    return (
      <View className="flex-1 bg-black ">
      <Button  onPress={showDatepicker}  rippleColor="#33dda1"
       mode="outlined" className="m-3" textColor='white' buttonColor='#176a29'
      >
        
        Start date  
      </Button>
      <Button onPress={showTimepicker} title="time"  buttonColor='#176a29'
       mode="outlined" className="m-3" textColor='white' rippleColor="#33dda1"
       >
        Start time
      </Button>
      <Text className="text-white" >selected: {date.toLocaleString()}-------------{time}</Text>
      
    </View>
        
    );
  };