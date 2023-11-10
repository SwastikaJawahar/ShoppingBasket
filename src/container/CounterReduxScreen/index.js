import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/Ionicons';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../features/counter/counterSlice';

const CounterReduxScreen = () => {
  const [val, setVal] = useState('');
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);
  return (
    <View style={style.container}>
      <Text style={style.text}>Counter App</Text>
      <Text style={style.counter}>{counter}</Text>
      <View>
        <MaterialIcons
          style={style.MaterialAdd}
          name="add"
          size={34}
          onPress={() => {
            dispatch(increment());
          }}
        />
        <MaterialIcons
          style={style.MaterialMinus}
          name="remove-outline"
          size={34}
          onPress={() => {
            dispatch(decrement());
          }}
        />
        <Button
          title={'+'}
          onPress={() => {
            dispatch(incrementByAmount(5));
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
    color: '#009387',
  },
  counter: {
    fontWeight: 'bold',
    fontSize: 80,
    textAlign: 'center',
    marginTop: 50,
    color: '#009387',
  },
  MaterialAdd: {
    marginTop: 30,
    marginLeft: 100,
  },
  MaterialMinus: {
    marginTop: -32,
    marginLeft: 230,
  },
  TextInput: {
    height: 40,
    width: 50,
    backgroundColor: 'white',
    marginHorizontal: 150,
    marginTop: 20,
  },
  button: {
    marginTop: 100,
  },
});

export default CounterReduxScreen;
