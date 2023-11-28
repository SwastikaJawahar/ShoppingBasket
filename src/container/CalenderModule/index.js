import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

import {NativeModules} from 'react-native';
const {CalendarModule} = NativeModules;

console.log(CalendarModule);

const CalenderModule = props => {
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
            'Party',
            'My House',
            eventId => {
              console.log(`Created a new event with id ${eventId}`);
            },
          );
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