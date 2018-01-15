import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../sceneStyles';

class Pending extends Component {
  static navigationOptions = {
    title: 'Pending',
    headerLeft: null,
    headerStyle: {
        backgroundColor: '#33ACDE',
      },
      headerTitleStyle: {
        color: 'white'
        }
  };
  render() {
    return (
      <View style={styles.screenView} >
        <Text>Pending</Text>
        <Text>Pending</Text>
        <Text>Pending</Text>
        <Text>Pending</Text>
        <Text>Pending</Text>
        <Text>Pending</Text>
     </View>
   );
  }
}

export default Pending;
