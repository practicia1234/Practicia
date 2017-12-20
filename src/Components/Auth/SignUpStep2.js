import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { fieldChange, SignUpAction } from '../../actions';
import { Button, Section, Input } from '../Helpers';

class SignUpStep2 extends Component {
  // Navigator information for this component
  static navigationOptions = {
    title: 'Sign Up [Step-2]',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 15,
      paddingRight: 0,
      alignSelf: 'center'
    },
  };

  // on email change call this method
  onFieldChange(e, text) {
    const fieldInfo = {
      actionType: e.actionType,
      value: text
    };
    this.props.fieldChange(fieldInfo); // fieldChange is the action creator
  }

  onPressSignUpStep2() {
    const userData = {
      role: this.props.navigation.state.params.userInfo.role,
      othersInfo: this.props
    };
    if (userData.role === 'teacher') {
      // call signUp finish actioin creator to finish the sign up process
      const actypeDefine = {
        actionType: 'SignUpstep2',
        value: userData
      };
      this.props.SignUpAction(actypeDefine); // Action call
    } else {
      // Navigate to "SignUpStep3"  component with all the user input data
      const { navigate } = this.props.navigation;
      navigate('SignUpStep3', userData);// Navigate to next screen
    }
  }
  // Render start
  render() {
    //const { navigate } = this.props.navigation;
    const { userInfo } = this.props.navigation.state.params;
    // render will return some dom
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <View >
        <ScrollView
          contentContainerStyle={styles.contentContainer}

        >
          <Text style={styles.headerText}> {userInfo.showText} </Text>
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
              onPress={this.onPressSignUpStep2.bind(this)}
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
  console.log('mapStateToProps');
  console.log(auth);
  console.log('mapStateToProps end');
  return auth;
};

export default connect(mapStateToProps, { fieldChange, SignUpAction })(SignUpStep2);
