import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../sceneStyles';

class Questions extends Component {
  static navigationOptions = {
    title: 'Questions',
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
        <Text>Questions</Text>
        <Text>Questions</Text>
        <Text>Questions</Text>
        <Text>Questions</Text>
        <Text>Questions</Text>  
        <Text>Questions</Text>
     </View>
   );
  }
}

export default Questions;
