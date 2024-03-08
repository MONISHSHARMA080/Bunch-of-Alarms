import * as Notifications from "expo-notifications";
import { Alert } from "react-native";
import PushNotification, { Importance } from "react-native-push-notification";
// import AlarmClock from "react-native-alarm-clock";
import { withSafeAreaInsets } from "react-native-safe-area-context";
// import { setAlarm, SetAlarmParams } from 'expo-alarm';
import { NativeModules } from 'react-native';


export function getCurrentTime(date) {
  if (date == null) {
    date = new Date();
  }
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  return formattedTime;
}

export function getFormattedDate(string) {
  return `${string.slice(4)} , ${string.slice(0, 3)}`;
}

export async function bunchofAlarm(
  time,
  title,
  endTime,
  endDate,
  startDate,
  inputValue,
) {
  let date = new Date();
  date.setDate(date.getDate());
  let hours = parseInt(time.split(":")[0]);
  let minutes = parseInt(time.split(":")[1]);
  date.setHours(hours, minutes);
  setInitialDate(startDate, date);
  
  const { AlarmClock } = NativeModules;
  console.log("AlarmClock ++++++++++++++++++++++++++++++");
  // AlarmClock.createAlarm(date.toISOString(), title);

 await AlarmClock.createAlarm(date.toISOString(), title);
  date.setHours(hours, minutes +3);
  console.log(date.toLocaleTimeString());
 await AlarmClock.createAlarm(date.toISOString(), title);

  // AlarmClock.createMultipleAlarms(date.toISOString(), endDate.toISOString(), inputValue, title);


  // console.log(date.toString());
  // setTimeOnEndDate(endDate, endTime)
  // AlarmClock.creaxteMultipleAlarms(date.toISOString(), endDate.toISOString(), inputValue, title )






  // Request permission if not already granted
  // await Notifications.getPermissionsAsync();
  // await notifee.requestPermission();
  




  // setAlarmfromStartToEndDate(date, endDate)
  // after setting initial date we should set the alarm for the time and then we should keep dooing it in the loop
  // or to optimize performance we can use kotlin to counter performance loss
  
  // AlarmClock.createAlarm(date.toISOString(), title);
}
export function setTimeOnEndDate(endDate, endTime){
  // console.log("+==============++++++++++++++++++++++++++++================")
  // console.log(endTime)
  // console.log(typeof(endTime));
  endDate.setHours(parseInt(endTime.split(":")[0]), parseInt(endTime.split(":")[1]))
  console.log("endDate----------",endDate.toISOString());
}

// export function setAlarmfromStartToEndDate(
//   time,
//   title,
//   endTime,
//   endDate,
//   startDate,
//   inputValue,
//   date,
// ) {
//   let a = true;
//   while (a === true) {
//     AlarmClock.createAlarm(date.toISOString(), title);
//     date;
//   }
// }

export function setInitialDate(startDate, dateObjectToAssignTo) {
  dateObjectToAssignTo.setFullYear(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
  );
}

export function check_form_validation(title) {
  if (title.trim() === "" || title.trim() === null) {
    Alert.alert("Title can't be empty", "Please enter title .");
    return false;
  }
  return true;
}
