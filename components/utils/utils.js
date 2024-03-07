import notifee, {
  IntervalTrigger,
  TimeUnit,
  TimestampTrigger,
  TriggerType,
} from "@notifee/react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Alert } from "react-native";
import PushNotification, { Importance } from "react-native-push-notification";
import AlarmClock from "react-native-alarm-clock";
import { withSafeAreaInsets } from "react-native-safe-area-context";

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
  // Request permission if not already granted
  await Notifications.getPermissionsAsync();

  await notifee.requestPermission();

  let date = new Date();
  date.setDate(date.getDate());
  let hours = parseInt(time.split(":")[0]);
  let minutes = parseInt(time.split(":")[1]);
  setInitialDate(startDate, date);

  let date1 = date
  date1.setHours(hours, minutes);
  AlarmClock.createAlarm(date1.toISOString(), title);
  console.log(date1.toString());

  // Creating a new Date object for the second alarm
  let date2 = new Date(date1.setHours(hours, minutes + 3));  // Clone the first date

  // Setting the second alarm
  AlarmClock.createAlarm(date2.toISOString(), title);
  console.log(date2.toString());
  // setAlarmfromStartToEndDate(date, endDate)
  // after setting initial date we should set the alarm for the time and then we should keep dooing it in the loop
  // or to optimize performance we can use kotlin to counter performance loss

  // AlarmClock.createAlarm(date.toISOString(), title);
}

export function setAlarmfromStartToEndDate(
  time,
  title,
  endTime,
  endDate,
  startDate,
  inputValue,
  date,
) {
  let a = true;
  while (a === true) {
    AlarmClock.createAlarm(date.toISOString(), title);
    date;
  }
}

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
