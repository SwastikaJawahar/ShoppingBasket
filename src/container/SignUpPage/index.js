import {React, useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LoginPage from '../LoginPage';
import {PersistanceHelper} from '../../helpers';
import {UserContextProvider, useUserContext} from '../../contexts/UserContext';

function SignUpPage(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const objUser = {user: userName, pass: password};

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
            value={userName}
            onChangeText={ct => setUserName(ct)}
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
          />
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            value={password}
            onChangeText={ct => setPassword(ct)}
            secureTextEntry={true}
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
          />
        </View>
        <Text style={[styles.text_footer, {marginTop: 35}]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            value={confirmPassword}
            onChangeText={ct => setConfirmPassword(ct)}
            secureTextEntry={true}
            placeholder="Confirm Password"
            style={styles.textInput}
            autoCapitalize="none"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate({
              name: 'LoginPage',
              params: {objUser},
              merge: true,
            });
          }}
          style={styles.signIn}>
          <Text style={styles.textSign}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUpPage;
