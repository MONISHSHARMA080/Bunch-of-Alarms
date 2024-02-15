// import Alarm from 'react-native-alarm-manager';
// import react-native-alarm-manager';
import { NativeEventEmitter, NativeModules } from 'react-native';
import moment from 'moment';
export function getCurrentTime(date){
    if (date == null){
        date = new Date()
    }
const hours = date.getHours();
const minutes = date.getMinutes();
const formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
return formattedTime
}


export function getFormattedDate(string){
        return `${string.slice(4)} , ${string.slice(0,3)}`
}


const b = NativeModules;
const {Alarm }= NativeModules;
console.log('====================================');
console.log(b);
console.log('====================================');
console.log("++++++++++++++++++++++++++++++++++++");
console.log(Alarm);
console.log('====================================');


 
  const dateToTime = currDate => {
    return moment(currDate).format('HH:mm:00') + '';
  };


export function bunchofAlarm(){

// give this func a json object ; perform operation to get 
// date and time of both in same order and the use a for loop to set multiple alarms 
// after frequency


const alarm = {
    alarm_time: dateToTime(new Date(2023, 1, 15 , 11, 53, 4)) ,   // HH:mm:00 yyyy-MM-dd
    alarm_title: 'alarm-title 52',
    alarm_text: 'text',
    alarm_sound: 'alarmclockshort6402',
    alarm_icon: 'icon',     // icon.png
    alarm_sound_loop: true,
    alarm_vibration: true,
    alarm_noti_removable: false,
    alarm_activate: true
  };
  
  Alarm.schedule(
    alarm,
    success => console.log(success ,"bfhjfbvrhvbebvfhfrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrre"),  // success message
    fail => {console.log(fail);console.log("failed");}         // fail message
    );
    
    Alarm.searchAll(
      success => console.log(success),  // alarm list
      fail => console.log(fail)         // fail message
    );
}

// const AlarmService = NativeModules.AlarmService;

// function setAlarm(dateString, timeString) {
//     AlarmService.setAlarm(dateString, timeString);
// }

// Example usage
// setAlarm('Jan 23 2024', '18:34');
