import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import Section from '../Helpers/Section';
import Button from '../Helpers/Button';

class SignUpStep2 extends Component {
  static navigationOptions = {
    title: 'Sign Up [Step-2]',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 24,
      paddingRight: 50,
      alignSelf: 'center'
    },
  };
  state = { text: '' };
  render() {
    //const { navigate } = this.props.navigation;
    const { userType } = this.props.navigation.state.params;
    console.log(userType);

    //console.log(this.props);
    return (
      <View style={styles.contaoner}>
        <Text style={styles.headerText}> {userType} </Text>
        <Section>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder="email@website.com"
            placeholderTextColor="#AAAAAA"
            style={styles.inputStyle}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
        </Section>
        <Section>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder="Password"
            placeholderTextColor="#AAAAAA"
            style={styles.inputStyle}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
        </Section>
        <Section>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder="First Name"
            placeholderTextColor="#AAAAAA"
            style={styles.inputStyle}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
        </Section>
        <Section>
          <TextInput
            underlineColorAndroid='transparent'
            placeholder="Last Name"
            placeholderTextColor="#AAAAAA"
            style={styles.inputStyle}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
        </Section>
        <Section>
          <Button style={styles.buttonLogin}>Submit</Button>
        </Section>
      </View>
    );
  }
}

const styles = {
  contaoner: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#9DDAEE',
    flex: 1,
    padding: 10,
  },
  inputStyle: {
    height: 50,
    borderColor: '#BBBBBB',
    borderWidth: 0.7,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
};

export default SignUpStep2;
