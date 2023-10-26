import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  TouchableOpacity: {
    height: 40,
    backgroundColor: '#FA6290',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    backgroundColor: '#F7F6F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemView: {
    flex: 2,
    backgroundColor: '#FAF899',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addItemButton: {
    height: 40,
    width: 120,
    backgroundColor: '#F7054E',
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    height: 40,
    width: 300,
    backgroundColor: '#FA99A8',
  },
  ButtonText: {
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  formview: {
    flex: 1,
    backgroundColor: '',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
