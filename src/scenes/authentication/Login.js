import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';

import { Button, Section, Input, Alert } from '../../components';
import {
  onFieldChangeAction,
  loginAction
} from '../../actions/authenticationAction'; // action included

class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  };

  onFieldChange(e, text) {
    const fieldInfo = {
      actionType: e.actionType,
      value: text
    };
    this.props.onFieldChangeAction(fieldInfo);
  }
  LoginAction() {
    const payload = this.props.authenticationReducer;
    this.props.loginAction(payload); // call action
  }
  alertMessage() {
    if (this.props.authenticationReducer.success.status) {
      return (
        <Alert alertStyleColor={styles.alertStyleColor}>
          {this.props.authenticationReducer.success.msg}
        </Alert>
      );
    }
    if (this.props.authenticationReducer.error.status) {
      return (
        <Alert>{this.props.authenticationReducer.error.msg}</Alert>
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.headerText}> Login </Text>
          {this.alertMessage()}
          <Section>
            <Input
              placeholder="email@gmail.com"
              onChangeText={this.onFieldChange.bind(this, { actionType: 'EMAIL_CHANGED' })}
              value={this.props.authenticationReducer.email}
            />
          </Section>
          <Section>
            <Input
              secureTextEntry
              placeholder="Password"
              onChangeText={this.onFieldChange.bind(this, { actionType: 'PASSWORD_CHANGED' })}
              value={this.props.authenticationReducer.password}
            />
          </Section>
          <Section>
            <Button
              onPress={this.LoginAction.bind(this)}
              style={styles.buttonLogin}
            >
              Submit
            </Button>
          </Section>
        </ScrollView>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#9DDAEE',
    padding: 10,
    flex: 1
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
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  alertStyleColor: {
    color: '#00A629',
  }
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  onFieldChangeAction,
  loginAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
