package com.BunchOfAlarms; 
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;

import com.facebook.react.bridge.Promise;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
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
}