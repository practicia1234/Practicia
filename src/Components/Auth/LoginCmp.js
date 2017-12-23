import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { fieldChange, LoginAction } from '../../actions';
import { Button, Section, Input, Alert } from '../Helpers';

class LoginCmp extends Component {

  // Navigator information for this component
  static navigationOptions = {
    title: 'Login',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 15,
      paddingRight: 0,
      alignSelf: 'center'
    },
  };

  // on text input field change call this method
  onFieldChange(e, text) {
    const fieldInfo = {
      actionType: e.actionType,
      value: text
    };
    this.props.fieldChange(fieldInfo); // fieldChange is the action creator
  }

// submit the login form
LoginAction() {
  const payload = {
    email: this.props.email,
    password: this.props.password
  };
  this.props.LoginAction(payload); // Action call
}

alertMessage() {
  if (this.props.status) {
    return (
      <Alert>{this.props.error.coreError.message}</Alert>
    );
  }
}

  render() {
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
              value={this.props.email}
            />
          </Section>
          <Section>
            <Input
              secureTextEntry
              placeholder="Password"
              onChangeText={this.onFieldChange.bind(this, { actionType: 'PASSWORD_CHANGED' })}
              value={this.props.password}
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
};

const mapStateToProps = ({ auth }) => {
  return auth;
};

export default connect(mapStateToProps, { fieldChange, LoginAction })(LoginCmp);
