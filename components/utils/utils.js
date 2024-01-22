import notifee, { IntervalTrigger, TriggerType, TimeUnit } from '@notifee/react-native';

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

    
// for (const [date, time] of Object.entries(yourDateTimeObject)) {
for (const i =0 ; i<2;i++ ) {
    // Build the notification object
    console.log("+++++++++++++++++++++++++++++++++");
    const notification = {
    
      title: "Your custom notification title", // Customize this
      body: "Your custom notification message", // Customize this
      trigger: new IntervalTrigger({ 
        type: TriggerType.TIME, // Specify trigger type
        interval: 52,
        TimeUnit:TimeUnit.SECONDS,
        initialNotification: { // Specify the initial notification time
          timestamp: new Date().getTime(), // Use your date and time
        },
      }),
    };
  
    // Schedule the notification with notifee
    try{
        await notifee.createTriggerNotification(notification);

    }
    catch (e) {
        console.log("--------------------------e---------------------");
        console.log(e);
        console.log("----------------------e----------------");
      }
      

  }   

}
