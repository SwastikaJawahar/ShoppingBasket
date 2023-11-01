import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput} from 'react-native-gesture-handler';

function LoginPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
          />
          <Feather name="eye-on" color="greeen" size={2} />
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            secureTextEntry={true}
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
          />
          <Feather name="eye-off" color="greeen" size={2} />
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('LoginPage')}
          style={styles.signIn}>
          <Text style={styles.textSign}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginPage;
