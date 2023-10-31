import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#08d4c4',
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    borderCurve: 'circular',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texttitle: {
    color: '#004d33',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  textdesc: {
    color: 'black',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    fontStyle: 'italic',
    fontVariant: 'small-caps',
  },
  TouchableOpacity: {
    height: 40,
    width: 150,
    backgroundColor: '#ff1a75',
    borderRadius: 5,
    marginVertical: 50,
    borderColor: '#08d4c4',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  Text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  TextTitle: {
    color: '#00e699',
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default styles;
