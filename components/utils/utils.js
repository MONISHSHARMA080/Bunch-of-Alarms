import notifee, { IntervalTrigger, TriggerType, TimeUnit } from '@notifee/react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';
import PushNotification,{Importance}  from "react-native-push-notification";

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




export async function bunchofAlarm(){


// give this func a json object ; perform operation to get 
// date and time of both in same order and the use a for loop to set multiple alarms 
// after frequency

await notifee.requestPermission()

PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
  
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
  
      // process the notification
  
      // (required) Called when a remote is received or opened, or local notification is opened
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },})


PushNotification.createChannel(
  {
    channelId: "channel-id2", // (required)
    channelName: "Alarm ", // (required)
    channelDescription: "notification of alarm ", // (optional) default: undefined.
    playSound: true, // (optional) default: true
    soundName: "castle.gg", // (optional) See `soundName` parameter of `localNotification` function
    importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);

const time = 1;

PushNotification.localNotificationSchedule({
  channelId: 'channel-id2', // Use the created channel ID
  title: 'Scheduled Notification',
  message: `Notification Message sent after ${time} `, // (required)
  date: new Date(Date.now() +  1000 *`${time}`), // in 60 secs
  allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
  color: "red", // (optional) default: system default
  vibrate: true, // (optional) default: true
  vibration: 500,
  /* Android Only Properties */
  repeatTime: 60 * 1000, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info
  playSound:true,
  soundName: "castle.gg",
  
});





}
