import notifee, { IntervalTrigger, TimeUnit,TimestampTrigger, TriggerType  } from '@notifee/react-native';
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





export async function bunchofAlarm() {
  // Request permission if not already granted
  await Notifications.getPermissionsAsync()






  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });


  Notifications.scheduleNotificationAsync({
    content: {
      title: `Look at that notification in 3 `,
      body: "this will repeat",
      sound:"castle.ogg"
    },
    trigger: {
      channelId:"new-notification",
      seconds:2,
      repeats:true
    },
  });




  }
