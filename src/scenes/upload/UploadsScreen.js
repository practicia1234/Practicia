import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../sceneStyles';


class UploadsScreen extends Component {
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
        <Text>UploadsScreen</Text>
        <Text>UploadsScreen</Text>
        <Text>UploadsScreen</Text>
        <Text>UploadsScreen</Text>
        <Text>UploadsScreen</Text>
        <Text>UploadsScreen</Text>
     </View>
   );
  }
}

export default UploadsScreen;
