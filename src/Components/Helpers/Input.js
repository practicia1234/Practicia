import React, { Component } from 'react';
import {
  TextInput
} from 'react-native';

class Input extends Component {
  render() {
    return (
      <TextInput
        underlineColorAndroid='transparent'
        secureTextEntry={this.props.secureTextEntry}
        placeholder={this.props.placeholder}
        placeholderTextColor="#AAAAAA"
        style={styles.inputStyle}
        onChangeText={this.props.onChangeText}
        value={this.props.value}
      />
    );
  }
}

const styles = {
  inputStyle: {
    height: 45,
    borderColor: '#BBBBBB',
    borderWidth: 0.7,
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
};

export { Input };
