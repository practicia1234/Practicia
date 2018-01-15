import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../sceneStyles';


class GameOnScreen extends Component {
  static navigationOptions = {
    title: 'Game On!',
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
        <Text>GameOnScreen</Text>
        <Text>GameOnScreen</Text>
        <Text>GameOnScreen</Text>
        <Text>GameOnScreen</Text>
        <Text>GameOnScreen</Text>
        <Text>GameOnScreen</Text>
     </View>
   );
  }
}

export default GameOnScreen;
