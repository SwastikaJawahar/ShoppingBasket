import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NativeEventEmitter, NativeModules} from 'react-native';
const {CalendarModule} = NativeModules;

console.log(CalendarModule);

const CalenderModule = props => {
  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(NativeModules.ToastExample);
    let eventListener = eventEmitter.addListener('EventReminder', event => {
      console.log(event.eventProperty); // "someValue"
    });
    CalendarModule.createCalendarEventSendingEvent();
    // Removes the listener once unmounted
    return () => {
      eventListener.remove();
    };
  }, []);

  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <View style={styles.container}>
      <Text>CalendarModule</Text>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
      <Button
        title="CallBack"
        color="#841584"
        onPress={() => {
          CalendarModule.createCalendarEventCallBack(
            'testName',
            'testLocation',
            error => {
              console.error(`Error found! ${error}`);
            },
            eventId => {
              console.log(`event id ${eventId} returned`);
            },
          );
        }}
      />
      <Button
        title="Promises"
        color="#841584"
        onPress={async () => {
          try {
            const eventId = await CalendarModule.createCalendarEventPromises(
              'Party',
              'My House',
            );
            console.log(`Created a new event with id ${eventId}`);
          } catch (e) {
            console.error(e);
          }
        }}
      />
    </View>
  );
};

export default CalenderModule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
