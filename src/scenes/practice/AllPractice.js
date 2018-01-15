import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../sceneStyles';


class AllPractice extends Component {
  static navigationOptions = {
    title: 'Submissions',
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
        <Text>AllPractice</Text>
        <Text>AllPractice</Text>
        <Text>AllPractice</Text>
        <Text>AllPractice</Text>
        <Text>AllPractice</Text>
        <Text>AllPractice</Text>
     </View>
   );
  }
}

export default AllPractice;
