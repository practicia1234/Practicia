import React, { Component } from 'react';
import { Text, View } from 'react-native';


class TaskList extends Component {
  static navigationOptions = {
    title: 'Tasks',
    headerLeft: null,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingRight: 0,
      alignSelf: 'center',
      color: '#ffffff'
    },
    headerStyle: {
      backgroundColor: '#2391BA',
    },
  };

  render() {
    return (
      <View >
        <Text>List of task</Text>
     </View>
   );
  }
}

export default TaskList;
