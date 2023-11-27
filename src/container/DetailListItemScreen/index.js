import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import propTypes from 'prop-types';

class DetailListItemScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {route} = this.props;
    const title = route.params.title;
    const desc = route.params.desc;
    return (
      <View style={styles.container}>
        <Text style={styles.texttitle}>{title}</Text>
        <Text style={styles.textdesc}>{desc}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ListItem')}
          style={styles.TouchableOpacity}>
          <Text style={styles.Text}>Go Back to List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomePage')}
          style={styles.TouchableOpacity}>
          <Text style={styles.Text}>Go Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

DetailListItemScreen.propTypes = {
  title: propTypes.string.isRequired,
  desc: propTypes.string.isRequired,
};
export default DetailListItemScreen;
