import notifee, { IntervalTrigger, TriggerType, TimeUnit } from '@notifee/react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';
import PushNotification from "react-native-push-notification";

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






// Notifications.requestPermissionsAsync()
// .then(
//   status=>{
//     if (status.status === "granted"){
//       this.showNotification;
//       console.log('====================================');
//       console.log("hfgffgfgfgfggfgf");
//       console.log('====================================');
//     }
//     else{
//       // Alert.alert("Notification permission not granted","can't show the alarms")
//       console.log("not granted");
//     }
//   }
// )

// const targetDate = new Date(2024, 0, 23, 22, 48 ); // January 23, 2024, at 6:04 PM
// console.log(targetDate.getMinutes());
// Notifications.scheduleNotificationAsync({
//   content: {
//     title: 'Your reminder alarm!',
//     body: 'This is a reminder for something important.',
//   },
//   trigger: {
//     repeats: false, // Set to true for repeating alarm
//     date: targetDate, // Trigger at the specified date and time
//   },
// }, )


// await Notifications.scheduleNotificationAsync({
//   content: {
//     title: "You've got mail! 📬",
//     sound: 'mySoundFile.wav', // Provide ONLY the base filename
//   },
//   trigger: {
//     seconds: 2,
//     channelId: 'new-emails',
//   },
// });

// await notifee.requestPermission();


// const channelId = await notifee.createChannel({
//   id: 'default',
//   name: 'Default Channel',
// });

// await notifee.displayNotification({
//   title: 'Wake up',
//   body: 'Main body content of the notification at 13 ',
//   android: {
//     channelId,
//     pressAction: { id: 'default' },
//   },
  // trigger: {
  //   type: TriggerType.TIMESTAMP,
  //   hour: 1,
  //   minute: 01,
  //   year: 2024,
  //   month: 0, // Note: Month is 0-indexed (January = 0)
  //   day: 23,
  // },

// });


// const settings = notifee.getNotificationSettings();
// console.log(settings);
// if (settings.android.alarm == AndroidNotificationSetting.ENABLED) {
//   //Create timestamp trigger
// } else {
//   // Show some user information to educate them on what exact alarm permission is,
//   // and why it is necessary for your app functionality, then send them to system preferences:
//   await notifee.openAlarmPermissionSettings();
// }





// const datee = new Date(Date.now());
// console.log(datee.getTime());
// datee.setHours(1);
// datee.setMinutes(4);

// Create a time-based trigger
// const trigger = {
//   type: TriggerType.TIMESTAMP,
//   timestamp: datee.getTime(), // fire at 11:10am (10 minutes before meeting)
//   alarmManager: true,
//   allowWhileIdle: true,
// };

// // Create a trigger notification
// await notifee.createTriggerNotification(
//   {
//     title: 'Meeting with Jane',
//     body: 'Today at 11:20am',
//     android: {
//       channelId: 'your-channel-id',
//     },
//   },
//   trigger,
// );





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
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function(err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});



}
