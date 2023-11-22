import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Modal,
  Button,
} from 'react-native';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useTheme} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker, {openPicker} from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import InputComponent from '../../components /InputComponent';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .matches(/^[a-zA-Z\s]+$/, 'First name must contain only letters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .matches(/^[a-zA-Z\s]+$/, 'Last name must contain only letters'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Invalid Phone Number',
    ),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email'),
  country: yup
    .string()
    .required('Country is required')
    .matches(/^[a-zA-Z\s]+$/, 'Country must contain only letters'),
  city: yup
    .string()
    .required('City is required')
    .matches(/^[a-zA-Z\s]+$/, 'City must contain only letters'),
});

const EditProfileScreen = props => {
  const {colors} = useTheme();
  const [image, setImage] = useState(
    'https://d113wk4ga3f0l0.cloudfront.net/c?o=eJyVkE9rwzAMxb-LYLfGTpOmS3LtoTA6Bu1hR2MSNXHzx8ZyEpbS7z4HyrIdJ9DhPQn0e7oD6cEWKAbbQg61c4ZyzilmspOz7uVErNAd981aVdWOnC4apjpZIbHBtFqWxIzV5VA4pXveYamkUA47YSyOCif67SWv2TaO-XYf7XbhPs22wflSSbwd3j_e5vMwH6fPutClPDU8XCoSp0ugCt0HYcpupoINNPjlSa_J9RpnXk6qdDXkaRZuoMYF8Sk8stHkr0J-h__Fk0To_sSapEPbSdsQX_fEj8tMX60skCQvsNI8ZalItyMKg_7fvfejZAMWSc0oKitH5ZZcBz9CC4_HN4sgja0=&s=98449b61c298785137ccf2cf8e23077d443b96a5',
  );
  const [modalOpen, setModalOpen] = useState(false);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      country: '',
      city: '',
    },
  });
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            setModalOpen(true);
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ImageBackground
              source={{
                uri: image
                  ? image
                  : 'https://d113wk4ga3f0l0.cloudfront.net/c?o=eJyVkE9rwzAMxb-LYLfGTpOmS3LtoTA6Bu1hR2MSNXHzx8ZyEpbS7z4HyrIdJ9DhPQn0e7oD6cEWKAbbQg61c4ZyzilmspOz7uVErNAd981aVdWOnC4apjpZIbHBtFqWxIzV5VA4pXveYamkUA47YSyOCif67SWv2TaO-XYf7XbhPs22wflSSbwd3j_e5vMwH6fPutClPDU8XCoSp0ugCt0HYcpupoINNPjlSa_J9RpnXk6qdDXkaRZuoMYF8Sk8stHkr0J-h__Fk0To_sSapEPbSdsQX_fEj8tMX60skCQvsNI8ZalItyMKg_7fvfejZAMWSc0oKitH5ZZcBz9CC4_HN4sgja0=&s=98449b61c298785137ccf2cf8e23077d443b96a5',
              }}
              style={{height: 100, width: 100}}
              imageStyle={{borderRadius: 15}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="camera"
                  size={35}
                  color="#fff"
                  style={{
                    opacity: 0.7,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 10,
                  }}
                />
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
          Swastika
        </Text>
      </View>

      <View style={styles.action}>
        <FontAwesome name="user-o" color={colors.text} size={20} />
        <InputComponent
          control={control}
          placeholder={'First name'}
          name="firstName"
          error={'errors?.firstName'}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" color={colors.text} size={20} />
        <InputComponent
          control={control}
          placeholder={'Last name'}
          name="lastName"
          error={'errors?.lastName'}
        />
      </View>
      <View style={styles.action}>
        <Feather name="phone" color={colors.text} size={20} />
        <InputComponent
          control={control}
          placeholder={'Phone'}
          name="phone"
          error={'errors?.phone'}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="envelope-o" color={colors.text} size={20} />
        <InputComponent
          control={control}
          placeholder={'Email'}
          name="email"
          error={'errors?.email'}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="globe" color={colors.text} size={20} />
        <InputComponent
          control={control}
          placeholder={'Country'}
          name="country"
          error={'errors?.country'}
        />
      </View>
      <View style={styles.action}>
        <Icon name="map-marker-outline" color={colors.text} size={20} />
        <InputComponent
          control={control}
          placeholder={'City'}
          name="city"
          error={'errors?.city'}
        />
      </View>
      <TouchableOpacity
        style={styles.commandButton}
        onPress={handleSubmit(formData => {
          console.log(formData);
        })}>
        <Text style={styles.panelButtonTitle}>Submit</Text>
      </TouchableOpacity>
      <View>
        <Modal visible={modalOpen}>
          <View style={styles.itemView}>
            <MaterialIcons
              style={styles.MaterialClose}
              name="close"
              size={24}
              onPress={() => {
                setModalOpen(false);
              }}
            />
            <View style={styles.panel}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>
                  Choose Your Profile Picture
                </Text>
              </View>

              <TouchableOpacity
                style={styles.panelButton}
                onPress={takePhotoFromCamera}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.panelButton}
                onPress={choosePhotoFromLibrary}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.panelButton}
                onPress={() => {
                  setModalOpen(false);
                }}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  MaterialClose: {
    marginBottom: 150,
    marginLeft: 300,
    marginTop: 60,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
