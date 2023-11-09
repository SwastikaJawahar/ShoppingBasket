import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  TouchableOpacity: {
    height: 40,
    backgroundColor: '#08d4c4',
    marginVertical: 5,
    justifyContent: 'flex-start',
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
    backgroundColor: '#08d4c4',
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
    backgroundColor: 'white',
    marginBottom: 20,
  },
  ButtonText: {
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
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
  TextCost: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 20,
  },
  MaterialClose: {
    marginBottom: 100,
    marginLeft: 300,
  },
  MaterialAdd: {
    marginBottom: 20,
    marginRight: 200,
  },
  MaterialCart: {
    fontSize: 30,
    marginHorizontal: 60,
  },
});

export default styles;
