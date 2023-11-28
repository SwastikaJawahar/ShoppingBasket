package com.shoppingbasket;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import com.facebook.react.bridge.Callback;
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
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }
    @ReactMethod
    public void createCalendarEventCallBack(String name, String location, Callback myFailureCallback, Callback mySuccessCallback) {
        Integer eventId = 123;
        mySuccessCallback.invoke( eventId);
    }
    @ReactMethod
    public void createCalendarEventPromises(String name, String location, Promise promise) {
        try {
            Integer eventId = 12;
            promise.resolve(eventId);
        } catch(Exception e) {
            promise.reject("Create Event Error", e);
        }
    }
}
