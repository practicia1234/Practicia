import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import { Button } from '../Common';


class SignUpStep3 extends Component {

  onButtonPress() {

    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}> Sign up: Teacher [Step-3]</Text>
        <View style={styles.formView}>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.TextInput}
            placeholder="First Name"
            onChangeText={(text) => this.setState({ text })}
          />
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.TextInput}
            placeholder="Last Name"
            onChangeText={(text) => this.setState({ text })}
          />
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.TextInput}
            placeholder="Date of birth"
            onChangeText={(text) => this.setState({ text })}
          />
          <Button onPress={this.onButtonPress.bind(this)}>
            Submit
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    padding: 10,
    backgroundColor: '#D2EEF7',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#9DDAEE',
    flex: 1,
    justifyContent: 'center',
  },
  formView: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  headingText: {
    fontSize: 23,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    color: '#3BAFDA',
    borderBottomWidth: 1,
    borderColor: '#7BCDE8',
  },
  TextInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    fontSize: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
};

export default SignUpStep3;
