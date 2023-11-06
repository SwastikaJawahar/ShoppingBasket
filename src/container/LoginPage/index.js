import {React, useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {PersistanceHelper} from '../../helpers';
import {UserContextProvider, useUserContext} from '../../contexts/UserContext';

function LoginPage(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {updatedData} = useUserContext();
  const {isLogin} = useUserContext();

  const login = [
    {user: 'swastika', pass: '1234'},
    {user: 'admin', pass: 'admin'},
  ];

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
        <TouchableOpacity
          onPress={() => {
            if (
              userName !== '' ||
              (userName === login.user && password !== '') ||
              password === login.pass
            ) {
              updatedData(true);
            } else {
              updatedData(false);
            }
            console.log(isLogin + '  login val');
          }}
          style={styles.signIn}>
          <Text style={styles.textSign}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginPage;
