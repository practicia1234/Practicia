import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Screen3 extends Component {
  static navigationOptions = {
    title: 'Screen3'
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
        <Text>Screen 3</Text>
      </View>
    );
  }
}
