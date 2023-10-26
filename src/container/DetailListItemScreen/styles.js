import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ABF3F3',
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    borderCurve: 'circular',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texttitle: {
    color: '#E61320',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  textdesc: {
    color: '#101A8E',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    fontStyle: 'italic',
    fontVariant: 'small-caps',
  },
  TouchableOpacity: {
    height: 40,
    width: 250,
    color: 'black',
    backgroundColor: '#F7054E',
    marginVertical: 50,
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
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default styles;
