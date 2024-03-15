package com.BunchOfAlarms; 

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.util.Log;
import com.facebook.react.bridge.Promise;

class AlarmModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "AlarmModule"

    @ReactMethod
    fun sayHello(promise: Promise) {
        try {
            promise.resolve("Hello, world!")
        } catch (e: Exception) {
            promise.reject("ERR_HELLO_WORLD", e)
        }
    }
    @ReactMethod
    fun createCalendarEvent(name: String, location: String) {
        Log.d("CalendarModule", "Create event called with name: $name and location: $location")
    }
}
