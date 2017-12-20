import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import logo from '../../Assets/Images/logo.png';


class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Image
            source={require('../../Assets/Images/logo.gif')}
            style={styles.logo}
          />
        <View style={styles.loginView}>
          <View style={styles.headingWrap}>
            <Text style={styles.heading}> LOGIN </Text>
          </View>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.TextInput}
            placeholder="Email@email.com"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.TextInput}
            placeholder="Password"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View style={styles.signUp}>
          <Text style={styles.signUpText}>
            New User? Please
            <Text style={styles.signUpTextBold}> Sign Up</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#33ACDE',
    padding: 10,
  },
  logo: {
    marginBottom: 20,
  },
  headingWrap: {
    alignSelf: 'stretch',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    paddingBottom: 20,
  },
  heading: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#FBFBFB',
  },
  loginView: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'rgba(237, 248, 252, .5)',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#39ADDF',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'stretch',
  },
  TextInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    fontSize: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginBottom: 10,
  },
  signUp: {
    marginTop: 20,
    alignSelf: 'center'
  },
  signUpText: {
    fontSize: 20,
  },
  signUpTextBold: {
    fontWeight: 'bold'
  },


};


export default Login;
