import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../sceneStyles';


class SecondScreen extends Component {
  static navigationOptions = {
    title: 'Uploads',
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
        <Text>SecondScreen</Text>
        <Text>SecondScreen</Text>
        <Text>SecondScreen</Text>
        <Text>SecondScreen</Text>
        <Text>SecondScreen</Text>
        <Text>SecondScreen</Text>
     </View>
   );
  }
}

export default SecondScreen;
