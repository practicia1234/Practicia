import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';

class Button extends Component {
  render() {
    return (
      <TouchableOpacity
      style={[styles.buttonStyle, this.props.style]}
      onPress={this.props.onPress}
      id={this.props.id}
      >
        <Text style={[styles.buttonTextStyle, this.props.styleText]}> { this.props.children }</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  buttonStyle: {
    backgroundColor: '#33ACDE',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 5,
    paddingTop: 7,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonTextStyle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  }
};
export { Button };
