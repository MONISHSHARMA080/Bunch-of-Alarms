import notifee, { IntervalTrigger, TimeUnit,TimestampTrigger, TriggerType  } from '@notifee/react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';
import PushNotification,{Importance}  from "react-native-push-notification";
import AlarmClock from "react-native-alarm-clock";


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





export async function bunchofAlarm(time,title) {
  // Request permission if not already granted
  await Notifications.getPermissionsAsync()


await notifee.requestPermission()



  // Notifications.setNotificationHandler({
  //   handleNotification: async () => ({
  //     shouldShowAlert: true,
  //     shouldPlaySound: true,
  //     shouldSetBadge: false,
  //   }),
  // });

  // const trigger = new Date(Date.now() + 6 * 1000);
  // // trigger.setMinutes(0);
  // // trigger.setSeconds(0);

  // Notifications.scheduleNotificationAsync({
  //   content: {
  //     title: `Look at that notification at 10 min `,
  //     body: "this will repeat",
  //     sound:"piano_taps.ogg",
      
  //   },
  //   trigger
  //   // : {
  //   //   channelId:"new-notification",
  //   //   seconds:3,
  //   //   // setMinutes:10
      
  //   //   // repeats:true
  //   // },
  // });
  let date = new Date();
  date.setDate(date.getDate());
   let hours = parseInt(time.split(":")[0])
   let minutes = parseInt(time.split(":")[1])
  date.setHours(hours, minutes);
  
  AlarmClock.createAlarm(date.toISOString(), title);



  }


export function check_form_validation(title){
  if (title.trim() === "" ||title.trim() === null){
    Alert.alert("Title can't be empty", 'Please enter title .');
  return false;
  } 
  return true;
}