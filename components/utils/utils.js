import notifee, { IntervalTrigger, TriggerType, TimeUnit } from '@notifee/react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';

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

//maing sure thai we have permission to show notification 
// -----------make this its own function
// Alert.alert("Muda","MudaMudaMudaMudaMudaMudaMuda")
Notifications.requestPermissionsAsync()
.then(
  status=>{
    if (status === "granted"){
      this.showNotification;
    }
    else{
      // Alert.alert("Notification permission not granted","can't show the alarms")
      console.log("not granted");
    }
  }
)


// First, set the handler that will cause the notification
// to show the alert


await Notifications.scheduleNotificationAsync({
  content: {
    title: "You've got mail! 📬",
    body:"Pikachu"
  },
  trigger: {
    seconds: 2,
    channelId: 'new-emails',
  },
});

const dateString = 'Tue Jan 23 2024 18:54';
// const timeString = '18:04';

const dateObj = new Date(dateString);
// dateObj.setHours(parseInt(timeString.substring(0, 2)));
// dateObj.setMinutes(parseInt(timeString.substring(2, 4)));

// const now = new Date();
// const triggerTime = Math.max(dateObj.getTime() - now.getTime(), 0); // Ensures non-negative time for future alarms
const targetDate = new Date(2024, 0, 23, 18, 52); // January 23, 2024, at 6:04 PM
console.log("+++++++"); // This will print the time in milliseconds until the alarm should trigger
console.log(targetDate); // This will print the time in milliseconds until the alarm should trigger
const date = new Date();
console.log('====================================');
console.log(date.getMonth());
console.log('====================================');
console.log("+++++++++"); // This will print the time in milliseconds until the alarm should trigger

Notifications.scheduleNotificationAsync({
  content: {
    title: 'Your reminder alarm!',
    body: 'This is a reminder for something important on 52 min.',
  },
  trigger: {
    repeats: false, // Set to true for repeating alarm
    date: targetDate, // Trigger at the specified date and time
  },})


}
