import React, { Component } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import { Button, Section, Input } from '../../components';
import {
  onFieldChangeAction,
  addChildAction
} from '../../actions/authenticationAction'; // action included

class AddChild extends Component {
  // Navigator information for this component
  static navigationOptions = {
    title: 'Add a Child...',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 15,
      paddingRight: 0,
      alignSelf: 'center'
    }
  }

  // input field data from redux
    onFieldChange(e, text) {
      const fieldInfo = {
        actionType: e.actionType,
        value: text
      };
      this.props.onFieldChangeAction(fieldInfo);
    }

    onPressAddChild() {
      console.log('onPressAddChild');
      const payloadData = {
          firstName: this.props.authenticationReducer.firstName,
          lastName: this.props.authenticationReducer.lastName,
          username: this.props.authenticationReducer.username,
          password: this.props.authenticationReducer.password,
          role: 'student',
          parentId: this.props.authenticationReducer.user.userInsertetId
      };
      this.props.addChildAction(payloadData); // call action
    }
    pageLoading() {
      if (this.props.authenticationReducer.loader) {
        return (
            <View style={styles.activityLoader}>
                <ActivityIndicator size="small" color="#01A4E0" />
            </View>
        );
      }
        return true;
    }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View>
        {this.pageLoading()}
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Section>
              <Input placeholder='First name' onChangeText={this.onFieldChange.bind(this, { actionType: 'FIRST_NAME' })} value={this.props.authenticationReducer.firstName} />
            </Section>
            <Section>
              <Input placeholder='Last name' onChangeText={this.onFieldChange.bind(this, { actionType: 'LAST_NAME' })} vvalue={this.props.authenticationReducer.lastName} />
            </Section>
            <Section>
              <Input placeholder='Username' onChangeText={this.onFieldChange.bind(this, { actionType: 'USERNAME' })} value={this.props.authenticationReducer.username} />
            </Section>
            <Section>
              <Input
                secureTextEntry
                placeholder='Password'
                onChangeText={this.onFieldChange.bind(this, { actionType: 'PASSWORD_CHANGED' })}
                value={this.props.authenticationReducer.password}
              />
            </Section>
            <Section>
              <Button style={styles.buttonLogin} onPress={this.onPressAddChild.bind(this)}>
                Next
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
    borderRadius: 5
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  alertStyleColor: {
    color: '#00A629'
  }
};
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = {
  onFieldChangeAction,
  addChildAction
};
export default connect(mapStateToProps, mapDispatchToProps)(AddChild);
