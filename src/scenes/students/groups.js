import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../sceneStyles';


class Groups extends Component {
  static navigationOptions = {
    title: 'Groups',
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
        <Text>Groups</Text>
        <Text>Groups</Text>
        <Text>Groups</Text>
        <Text>Groups</Text>
        <Text>Groups</Text>
        <Text>Groups</Text>
     </View>
   );
  }
}

export default Groups;
