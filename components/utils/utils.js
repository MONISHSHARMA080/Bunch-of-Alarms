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
  await notifee.requestPermission();

     // Create a channel (required for Android)
    //  const channelId = await notifee.createChannel({
    //   id: 'default',
    //   name: 'Default Channel',
    //   sound:"castle.gg"
    // });

    // // Display a notification
    // await notifee.displayNotification({
    //   title: 'Notification Title',
    //   body: 'Main body content of the notification',
    //   android: {
    //     channelId,
    //     smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
    //     // pressAction is needed if you want the notification to open the app when pressed
    //     pressAction: {
    //       id: 'default',
    //     },
    //   },
    // });

    const date = new Date(Date.now());
    date.setHours(14);
    date.setMinutes(27);

    // Create a time-based trigger
    const trigger= {
      type: TriggerType.INTERVAL,
      interval: 16,
      timeUnit: TimeUnit.MINUTES
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Jane',
        body: 'Today at 2:27 PM',
        android: {
          channelId: 'your-channel-id',
        },
      },
      trigger,
    );






















  }
