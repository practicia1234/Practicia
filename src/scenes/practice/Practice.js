import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../sceneStyles';


class Practice extends Component {
  static navigationOptions = {
    title: 'Practice',
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
        <Text>Practice</Text>
        <Text>Practice</Text>
        <Text>Practice</Text>
        <Text>Practice</Text>
        <Text>Practice</Text>
        <Text>Practice</Text>
     </View>
   );
  }
}

export default Practice;
