import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../HomeScreen';
import Catagories from '../Catagories';
import {MainStackNavigator} from '../../navigation/StackNavigation.js';
import {useNavigation} from '@react-navigation/native';

function ProfileScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              Swastika
            </Title>
            <Caption style={styles.caption}>@s_ka</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="human" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>Female</Text>
        </View>
        <View style={styles.row}>
          <Icon name="calendar-month-outline" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>14/06/1993</Text>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>Chennai, India</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            swastika@gmail.com
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title>£140</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple
          onPress={() => {
            props.navigation.navigate('Catagories');
          }}>
          <View style={styles.menuItem}>
            <Icon name="view-list" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Catagories</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            props.navigation.navigate('CartScreen');
          }}>
          <View style={styles.menuItem}>
            <Icon name="cart" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Go to Cart</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            props.navigation.navigate('HomePage');
          }}>
          <View style={styles.menuItem}>
            <Icon name="view-dashboard" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Dashboard</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 1,
    marginTop: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
