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
    padding: 10,
  },
  buttonTextStyle: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
  }
};
export default Button;
