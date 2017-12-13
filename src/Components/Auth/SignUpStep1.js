import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import Button from '../Helpers/Button';
import Section from '../Helpers/Section';

class SignUpStep1 extends Component {
  onPressSignupAs(e) {
    console.log(e);
    // need to navigate to another page with this value
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../Assets/Images/download.png')}
          />
        </View>
        <View style={styles.contentArea}>
          <Text style={styles.signInAs}>Sign Up As...</Text>
          <Section>
            <Button
            onPress={this.onPressSignupAs.bind(this, { userType: 'Teacher' })}
            >
              Teacher
            </Button>
          </Section>
          <Section>
            <Button
            onPress={this.onPressSignupAs.bind(this, { userType: 'Parent' })}
            >Parent</Button>
          </Section>
          <Section>
            <Button
            onPress={this.onPressSignupAs.bind(this, { userType: 'Student' })}
            >Adult Student (18+)</Button>
          </Section>
        </View>
        <View style={styles.LoginBox}>
          <Text style={styles.LoginText}>Already have an account? </Text>
          <Section>
            <Button style={styles.buttonLogin} styleText={styles.buttonText}>Login</Button>
          </Section>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#9DDAEE',
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  userType: {
    fontSize: 23,
    fontWeight: 'bold',
    backgroundColor: '#3BAFDA',
    margin: 10,
    padding: 10,
    textAlign: 'center',
    color: '#fff',
  },
  contentArea: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  logo: {
    width: 300,
    height: 100,
  },
  signInAs: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  LoginBox: {
    marginTop: 70,
    marginLeft: 40,
    marginRight: 40,
  },
  LoginText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonLogin: {
    backgroundColor: '#C4C4C4',
  },
  buttonText: {
    color: '#000000',
  }
};

export default SignUpStep1;
