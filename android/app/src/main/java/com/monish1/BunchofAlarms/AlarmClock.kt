package com.AlarmClock

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

    @ReactMethod
    fun createAlarm(id: Int, isoDate: String, name: String) {
        try {
            val tz = TimeZone.getTimeZone("UTC")
            val df1: DateFormat = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
            df1.timeZone = tz
            val date: Date = df1.parse(isoDate)

            val i = Intent(AlarmClock.ACTION_SET_ALARM)
            i.putExtra(AlarmClock.EXTRA_SKIP_UI, true)
            i.putExtra(AlarmClock.EXTRA_MESSAGE, name)
            i.putExtra(AlarmClock.EXTRA_HOUR, date.hours)
            i.putExtra(AlarmClock.EXTRA_MINUTES, date.minutes)

            // Use a unique ID for each alarm
            i.putExtra(AlarmClock.EXTRA_ALARM_ID, id)

            currentActivity?.startActivity(i)
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
            while (currentDate.before(endDate)) {
                createAlarm(df1.format(currentDate), name)
                val calendar = Calendar.getInstance()
                calendar.time = currentDate
                calendar.add(Calendar.MINUTE, intervalMinutes)
                currentDate = calendar.time
            }
        } catch (e: Exception) {
            e.printStackTrace()
            Log.e("[RNAlarmClock]", "Error creating multiple reminders")
            return
        }

        Log.i("[RNAlarmClock]", "Multiple reminders created")
    }


}