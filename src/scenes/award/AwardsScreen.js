import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../sceneStyles';


class AwardsScreen extends Component {
  static navigationOptions = {
    title: 'Awards',
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
        <Text>AwardsScreen</Text>
        <Text>AwardsScreen</Text>
        <Text>AwardsScreen</Text>
        <Text>AwardsScreen</Text>
        <Text>AwardsScreen</Text>
        <Text>AwardsScreen</Text>
     </View>
   );
  }
}

export default AwardsScreen;
