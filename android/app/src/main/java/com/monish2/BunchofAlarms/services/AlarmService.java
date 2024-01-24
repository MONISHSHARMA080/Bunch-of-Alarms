package com.monish2.BunchofAlarmse.services;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.monish2.BunchofAlarmse.receivers.AlarmReceiver; // Adjust the package path if needed


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class AlarmService {

    public static final String ALARM_ACTION = "com.monish2.BunchofAlarmse.ALARM_ACTION";

    public static void setAlarm(Context context, String dateString, String timeString) {
        SimpleDateFormat sdf = new SimpleDateFormat("MMM dd yyyy HH:mm");
        try {
            Date alarmDate = sdf.parse(dateString + " " + timeString);
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(alarmDate);

            AlarmManager alarmManager = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
            Intent intent = new Intent(context, AlarmReceiver.class);
            PendingIntent pendingIntent = PendingIntent.getBroadcast(context, 0, intent, 0);

            alarmManager.setExact(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(), pendingIntent);
            Log.d("AlarmService", "Alarm set for " + sdf.format(alarmDate));
        } catch (ParseException e) {
            Log.e("AlarmService", "Error parsing date/time: " + e.getMessage());
        }
    }
}
