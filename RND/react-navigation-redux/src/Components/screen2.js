import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { incrementAction } from '../Actions/actionCreator';

class Screen2 extends Component {
  static navigationOptions = {
    title: 'Screen2'
  };

  navigateToScreen3() {
    const payload = {
      email: 'email@gamil.com',
      password: '123456'
    };
    console.log('navigateToScreen3 function');
    this.props.incrementAction(payload); // Action call
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
        <Text>Screen 2</Text>
        <Text>Move to
          <Text onPress={this.navigateToScreen3}>Screen 3</Text>
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps');
  return state;
};

export default connect(mapStateToProps, { incrementAction })(Screen2);
