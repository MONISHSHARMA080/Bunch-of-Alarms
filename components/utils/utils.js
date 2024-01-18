import Alarm from 'react-native-alarm-manager';

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




export function bunchofAlarm(){

// give this func a json object ; perform operation to get 
// date and time of both in same order and the use a for loop to set multiple alarms 
// after frequency


    const alarm = {
        alarm_time: '23:17:00 2024-01-18',   // HH:mm:00 yyyy-MM-dd
        alarm_title: 'title',
        alarm_text: 'text',
        alarm_sound: 'sound',   // sound.mp3 -- figure a way to get this (random)
        alarm_icon: 'icon',     // icon.png
        alarm_sound_loop: true,
        alarm_vibration: true,
        alarm_noti_removable: true,
        alarm_activate: true
      };
      
      Alarm.schedule(
        alarm,
        success => console.log("success"),  // success message
        fail => console.log("fail")         // fail message
      );

}