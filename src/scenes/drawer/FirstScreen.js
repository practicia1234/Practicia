import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../sceneStyles';


class FirstScreen extends Component {
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
        <Text>FirstScreen</Text>
        <Text>FirstScreen</Text>
        <Text>FirstScreen</Text>
        <Text>FirstScreen</Text>
        <Text>FirstScreen</Text>
        <Text>FirstScreen</Text>
     </View>
   );
  }
}

export default FirstScreen;
