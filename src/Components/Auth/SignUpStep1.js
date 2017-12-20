import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import { Button, Section } from '../Helpers';

class SignUpStep1 extends Component {
  static navigationOptions = {
   header: null,
  };
  onPressSignupAs(e) {
    const { navigate } = this.props.navigation;
    navigate('SignUpStep2', { userInfo: e });// Navigate to next screen
  }
  render() {
    // define user type information
    const userInfo = {
      teacher: {
        role: 'teacher',
        showText: 'Teacher'
      },
      parent: {
        role: 'parent',
        showText: 'Parent'
      },
      student: {
        role: 'student',
        showText: 'Adult Student (18+)'
      }
    };
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../Assets/Images/logo.png')}
          />
        </View>
        <View style={styles.contentArea}>
          <Text style={styles.signInAs}>Sign Up As...</Text>
          <Section>
            <Button
            onPress={this.onPressSignupAs.bind(this, userInfo.teacher)}
            >
              Teacher
            </Button>
          </Section>
          <Section>
            <Button
            onPress={this.onPressSignupAs.bind(this, userInfo.parent)}
            >Parent</Button>
          </Section>
          <Section>
            <Button
            onPress={this.onPressSignupAs.bind(this, userInfo.student)}
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
      </ScrollView>
    );
  }
}

const styles = {
  contentContainer: {
    flex: 1
  },
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
    marginTop: 10,
    marginBottom: 40,
  },
  logo: {
    width: 250,
    height: 75,
  },
  signInAs: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  LoginBox: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
  },
  LoginText: {
    fontSize: 15,
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
