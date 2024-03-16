import * as Notifications from "expo-notifications";
import PushNotification, { Importance } from "react-native-push-notification";
// import AlarmClock from "react-native-alarm-clock";
import { withSafeAreaInsets } from "react-native-safe-area-context";
// import { setAlarm, SetAlarmParams } from 'expo-alarm';
import { Alert } from "react-native";
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

  setTimeOnDateObject(startDate,time)
  setTimeOnDateObject(endDate, endTime)

  const { AlarmModule, CalendarModule } = NativeModules;
  console.log(CalendarModule);
  
  const setAlarms = async (startDate, endDate ,name, id) => {
    try {
      const result = await CalendarModule.setAlarm(startDate, endDate, name, id);
      console.log('Alarms created successfully:', result);
    } catch (error) {
      console.error('Error creating alarms:', error);
    }
  };
  
  console.log("startDate.getHours() is ", startDate.getHours() , typeof startDate.getHours()
    ," startDate.getMinutes() +2 is" , startDate.getMinutes() +2 , typeof startDate.getMinutes() +2, 
   title , "title" , typeof title
   );

  //  setAlarms(startDate.getHours(), startDate.getMinutes() + 1, title, 1)
   setAlarms(startDate.getHours(), startDate.getMinutes() + 5, title, 2) 
   
   
  // console.log(CalendarModule);
  // await AlarmClock.createAlarm(date.toISOString(), title);
  // await AlarmClock.loadModel();
//  AlarmClock.createAlarm(date.toISOString(), title);
//   date.setHours(hours, minutes +3);
//   console.log(date.toLocaleTimeString());
//  AlarmClock.createAlarm(date.toISOString(), title);

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

export function check_form_validation(title) {
  if (title.trim() === "" || title.trim() === null) {
    Alert.alert("Title can't be empty", "Please enter title .");
    return false;
  }
  return true;
}

export function setTimeOnDateObject(date ,time){
  let hours = parseInt(time.split(":")[0]);
  let minutes = parseInt(time.split(":")[1]);
  date.setHours(hours, minutes);
}



// export function setTimeOnEndDate(endDate, endTime){
//   // console.log("+==============++++++++++++++++++++++++++++================")
//   // console.log(endTime)
//   // console.log(typeof(endTime));
//   endDate.setHours(parseInt(endTime.split(":")[0]), parseInt(endTime.split(":")[1]))
//   console.log("endDate----------",endDate.toISOString());
// }

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

// export function setDateOnDateObject(date, dateObjectToAssignTo) {  // thing i am getting is an date object 
//   dateObjectToAssignTo.setFullYear(
//     date.getFullYear(),
//     date.getMonth(),
//     date.getDate(),
//   );
// }
