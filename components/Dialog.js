import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Button } from 'react-native-paper';

export default function App() {
    const [date, setDate] = useState(new Date());
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
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
      <>
        <Button  onPress={showDatepicker}  rippleColor="#33dda1"
         mode="outlined" className="m-3" textColor='white' buttonColor='#176a29'
        >Date</Button>
        <Button onPress={showTimepicker} title="time"  buttonColor='#176a29'
         mode="outlined" className="m-3" textColor='white' rippleColor="#33dda1"
         >Time</Button>
      </>
    );
  };


  