import {React, useContext, useEffect, useState} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../features/Auth/authSlice';

function LoginPage(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {updatedData} = useUserContext();
  const {isLogin} = useUserContext();

  const dispatch = useDispatch();
  // const {route} = props;

  useEffect(() => {
    PersistanceHelper.setValue('userName', userName);
  }, [userName]);

  const handleLogin = () => {
    const user = {username: userName, password: password};
    dispatch(login(user));
  };

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
            handleLogin();
            // if (route.params && route.params.objUser) {
            //   const {user, pass} = route.params.objUser;

            //   if (userName === user && password === pass) {
            //     updatedData(true);
            //   } else {
            //     updatedData(false);
            //   }
            // } else {
            //   if (
            //     login.find(data => data.user === userName) &&
            //     login.find(data => data.pass === password)
            //   ) {
            //     updatedData(true);
            //   } else {
            //     updatedData(false);
            //   }
            // }
          }}
          style={styles.signIn}>
          <Text style={styles.textSign}>Get Started</Text>
        </TouchableOpacity>
        <Text style={[styles.text_footer, {marginTop: 35}]}>
          Not a User Click Here for Register.!
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('SignUpPage');
          }}
          style={styles.signIn}>
          <Text style={styles.textSign}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginPage;
