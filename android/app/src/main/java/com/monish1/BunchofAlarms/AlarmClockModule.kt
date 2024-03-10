package com.monish1.BunchofAlarms


import android.content.Intent
import android.provider.AlarmClock
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.text.DateFormat
import java.text.SimpleDateFormat
import java.util.*

class AlarmClockModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    override fun getName(): String {
        return "AlarmClock"
    }

    // trisl func
     @ReactMethod
    fun loadModel(path: String) {
        Log.d("GLBModule", "Loading $path")
    }

    @ReactMethod
    fun createAlarm(id: Int, isoDate: String, name: String) {
        try {
            val tz = TimeZone.getTimeZone("UTC")
            val df1: DateFormat = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
            df1.timeZone = tz
            val date: Date = df1.parse(isoDate)

            val calendar = Calendar.getInstance()
            calendar.time = date

            val i = Intent(AlarmClock.ACTION_SET_ALARM)
            i.putExtra(AlarmClock.EXTRA_SKIP_UI, true)
            i.putExtra(AlarmClock.EXTRA_MESSAGE, name)
            i.putExtra(AlarmClock.EXTRA_HOUR, calendar.get(Calendar.HOUR_OF_DAY))
            i.putExtra(AlarmClock.EXTRA_MINUTES, calendar.get(Calendar.MINUTE))

            // Use a unique ID for each alarm
            // i.putExtra(AlarmClock.EXTRA_ALARM_ID, id)

            currentActivity?.startActivity(i)
            Log.i("[RNAlarmClock]", "Reminder created with ID: $id")
            
        } catch (e: Exception) {
            e.printStackTrace()
            Log.e("[RNAlarmClock]", "Error creating reminder")
            return
        }

        Log.i("[RNAlarmClock]", "Reminder created with ID: $id")
    }


 @ReactMethod
    fun createMultipleAlarms(startIsoDate: String, endIsoDate: String, intervalMinutes: Int, name: String) {
        try {
            val tz = TimeZone.getTimeZone("UTC")
            val df1: DateFormat = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
            df1.timeZone = tz

            val startDate: Date = df1.parse(startIsoDate)
            val endDate: Date = df1.parse(endIsoDate)

            var currentDate = startDate
            var id :Int = 1
            while (currentDate.before(endDate)) {
                createAlarm(id,df1.format(currentDate), name)
                val calendar = Calendar.getInstance()
                calendar.time = currentDate
                calendar.add(Calendar.MINUTE, intervalMinutes)
                currentDate = calendar.time
                id = id + 1
            }
        } catch (e: Exception) {
            e.printStackTrace()
            Log.e("[RNAlarmClock]", "Error creating multiple reminders")
            return
        }

        Log.i("[RNAlarmClock]", "Multiple reminders created")
    }


}