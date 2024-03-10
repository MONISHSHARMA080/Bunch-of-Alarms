package com.BunchOfAlarms; 
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;


import android.content.Intent;
import android.provider.AlarmClock;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;


import com.facebook.react.bridge.Promise;

// Make the class public
public class CalendarModule extends ReactContextBaseJavaModule {
    public CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    // add to CalendarModule.java
    @Override
    public String getName() {
        return "CalendarModule";
    }
    @ReactMethod
    public void sayMyName(String name, Promise promise) {
        try {
            String result = name + "bhjvbhj";
            promise.resolve(result);
        } catch (Exception e) {
            promise.reject("SAY_MY_NAME_ERROR", e.getMessage());
        }
    }
    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }
    @ReactMethod
    public void createAlarm(String isoDate, String name) {
        try {
            TimeZone tz = TimeZone.getTimeZone("UTC");
            DateFormat df1 = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
            df1.setTimeZone(tz);
            Date date = df1.parse(isoDate);

            Intent i = new Intent(AlarmClock.ACTION_SET_ALARM);
            i.putExtra(AlarmClock.EXTRA_SKIP_UI, true);
            i.putExtra(AlarmClock.EXTRA_MESSAGE, name);
            i.putExtra(AlarmClock.EXTRA_HOUR, date.getHours());
            i.putExtra(AlarmClock.EXTRA_MINUTES, date.getMinutes());

            getCurrentActivity().startActivity(i);
        } catch (Exception e) {
            e.printStackTrace();
            Log.e("CalendarModule", "Error creating alarm");
            return;
        }

        Log.i("CalendarModule", "Alarm created");
    }
}