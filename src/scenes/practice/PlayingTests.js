import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../sceneStyles';


class PlayingTests extends Component {
  static navigationOptions = {
    title: 'Playing Tests',
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
        <Text>PlayingTests</Text>
        <Text>PlayingTests</Text>
        <Text>PlayingTests</Text>
        <Text>PlayingTests</Text>
        <Text>PlayingTests</Text>
        <Text>PlayingTests</Text>
     </View>
   );
  }
}

export default PlayingTests;
