import notifee, { IntervalTrigger, TriggerType, TimeUnit } from '@notifee/react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

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


Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 },
    });
  }


  schedulePushNotification();``

}
