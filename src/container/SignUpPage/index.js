import {React, useContext, useState, useEffect} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../features/Auth/authSlice';
import {userActions} from '../../features/UserApi/UserSlice';
import {APIHelper} from '../../helpers';
import {kApiUserSignUp} from '../../config/WebService';

const {request, success, failure} = userActions;

function SignUpPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(undefined);

  const user = useSelector(state => state.user);

  // useEffect(() => {
  //   if (user?.errorMessage?.message) {
  //     //   Alert.alert('Error', user?.errorMessage?.message);
  //     setErrorMsg(user?.errorMessage?.message);
  //   } else {
  //     setErrorMsg(undefined);
  //   }
  // }, [user]);

  const dispatch = useDispatch();

  // const handleRegister = () => {
  //   const user = {username: userName, password: password};
  //   dispatch(register(user));
  // };

  // const objUser = {user: userName, pass: password};

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
            value={email}
            onChangeText={ct => setEmail(ct)}
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
            secureTextEntry={true}
            placeholder="Confirm Password"
            style={styles.textInput}
            autoCapitalize="none"
            value={confirmPassword}
            onChangeText={ct => {
              setConfirmPassword(ct);
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            // handleRegister();
            dispatch(request({email, password}));

            APIHelper.post(kApiUserSignUp, {email, password})
              .then(response => {
                dispatch(success(response));

                props.navigation.navigate('LoginPage');
              })
              .catch(error => {
                dispatch(failure(error));
              });
          }}
          //   props.navigation.navigate({
          //     name: 'LoginPage',
          //     params: {objUser},
          //     merge: true,
          //   });
          // }}
          style={styles.signIn}>
          <Text style={styles.textSign}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUpPage;
