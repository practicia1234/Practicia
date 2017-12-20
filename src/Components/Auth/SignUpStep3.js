import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { fieldChange } from '../../actions';
import { Section, Input, Button } from '../Helpers';

class SignUpStep3 extends Component {

  // Navigator information for this component
  static navigationOptions = {
    title: 'Sign Up [Step-3]',
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
  // call function "onPressSearchTeacher"
  onPressSearchTeacher() {
    const signUpInfo = this.props.navigation.state.params;
    const seacrhKey = this.props.seacrhTeacherText;

    console.log(signUpInfo);
    console.log(seacrhKey);
    //call action creator to search teacher and send back here with the list of
    //teacher from fiebase
  }

  render() {
    return (
      <View style={styles.container}>
        <Section>
          <Text style={styles.headerText}>Search For Your Teacher</Text>
        </Section>
        <Section>
          <Input
            placeholder="type in your teacher's name or email"
            onChangeText={this.onFieldChange.bind(this, { actionType: 'SEARCH_TEACHER_CHANGED' })}
            value={this.props.seacrhTeacherText}
          />
        </Section>
        <Section>
          <Text style={styles.hintText}>Hint: Most secure to search by their last name</Text>
        </Section>
        <Section>
          <Button
            onPress={this.onPressSearchTeacher.bind(this)}
            style={styles.buttonLogin}
          >
            Search
          </Button>
        </Section>
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
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  hintText: {
    fontSize: 11,
    textAlign: 'center',
  }
};

const mapStateToProps = ({ auth }) => {
  return auth;
};

export default connect(mapStateToProps, { fieldChange })(SignUpStep3);
