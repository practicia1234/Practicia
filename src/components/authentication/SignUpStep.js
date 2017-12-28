import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import {
  onFieldChangeAction,
  SignUpAction
} from '../../actions/authenticationAction'; // action included
import { Button, Section, Input } from '../helpers';

class SignUp extends Component {
  // Navigator information for this component
  static navigationOptions = {
    title: 'Sign Up [Step-1]',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 15,
      paddingRight: 0,
      alignSelf: 'center'
    },
  };

  // input field data from redux
  onFieldChange(e, text) {
    const fieldInfo = {
      actionType: e.actionType,
      value: text
    };
    this.props.onFieldChangeAction(fieldInfo);
  }

  onPressSignUp() {
    const SignUpFields = {
      role: this.props.navigation.state.params.role,
      email: this.props.authenticationReducer.email,
      password: this.props.authenticationReducer.password,
      firstName: this.props.authenticationReducer.firstName,
      lastName: this.props.authenticationReducer.lastName
    };
    this.props.SignUpAction(SignUpFields);
  }
  // Render start
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <View >
        <ScrollView
          contentContainerStyle={styles.contentContainer}

        >
          <Text style={styles.headerText}> {this.props.navigation.state.params.showText} </Text>
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
            <Input
              placeholder="First Name"
              onChangeText={this.onFieldChange.bind(this, { actionType: 'FIRST_NAME' })}
              value={this.props.firstName}
            />
          </Section>
          <Section>
            <Input
              placeholder="Last Name"
              onChangeText={this.onFieldChange.bind(this, { actionType: 'LAST_NAME' })}
              value={this.props.lastName}
            />
          </Section>
          <Section>
            <Button
              onPress={this.onPressSignUp.bind(this)}
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

const mapStateToProps = (state) => {
  //console.log(state);
  return state;
};

const mapDispatchToProps = {
  onFieldChangeAction,
  SignUpAction
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
