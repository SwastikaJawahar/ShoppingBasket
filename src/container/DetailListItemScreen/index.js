import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

class DetailListItemScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const {route} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.texttitle}>{route.params.title}</Text>
        <Text style={styles.textdesc}>{route.params.desc}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.push('ListItem')}
          style={styles.TouchableOpacity}>
          <Text style={styles.Text}>Go Back to List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.popToTop()}
          style={styles.TouchableOpacity}>
          <Text style={styles.Text}>Go Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DetailListItemScreen;
