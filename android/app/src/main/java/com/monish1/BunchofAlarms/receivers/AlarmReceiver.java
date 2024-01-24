package com.monish1.BunchofAlarmsreceivers;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

public class AlarmReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {
        Log.d("AlarmReceiver", "Alarm triggered!");
        // You can start an activity/service here to handle the alarm event
        // or show a notification, play sound, etc.
    }
}
