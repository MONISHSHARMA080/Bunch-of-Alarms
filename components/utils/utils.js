import notifee from '@notifee/react-native';

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


const smallIconResourceId = 'name-of-a-small-icon';


     // Request permissions (required for iOS)
     await notifee.requestPermission()

     // Create a channel (required for Android)
     const channelId = await notifee.createChannel({
       id: 'default',
       name: 'Default Channel',
     });
 
     // Display a notification
     const notificationId = await notifee.displayNotification({
        id: '123',
        title: 'Notification Title',
        body: 'Main body content of the notification',
        android: {
          channelId,
        },
      });

      await notifee.displayNotification({
        id: '123',
        title: 'Updated Notification Title',
        body: 'Updated main body content of the notification',
        android: {
          channelId,
        },
      });

      async function cancel(notificationId) {
        await notifee.cancelNotification(notificationId);
      }
      
      setTimeout(
        ()=>cancel("123"), 2000
      )

  

}