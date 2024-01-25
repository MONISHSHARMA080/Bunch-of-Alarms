package com.monish1.BunchofAlarms.db;

import android.content.Context;

import androidx.room.Room;
import androidx.room.RoomDatabase;
import androidx.room.TypeConverters;

import com.monish1.BunchofAlarms.model.AlarmDao;
import com.monish1.BunchofAlarms.model.AlarmDto;

@androidx.room.Database(entities = {AlarmDto.class}, version = 1, exportSchema = false)
@TypeConverters({RoomTypeConverter.class})
public abstract class Database extends RoomDatabase {
    public abstract AlarmDao alarmDao();
    private static Database instance;

    public static Database getInstance(Context context){
        if(instance==null){
            instance = Room.databaseBuilder(context.getApplicationContext(), Database.class,
                    "alarm.db").build();
        }

        return instance;
    }
}