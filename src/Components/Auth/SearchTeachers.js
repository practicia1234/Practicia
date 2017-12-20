import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
//import { connect } from 'react-redux';
//import { CheckBox } from 'react-native-elements';
//import { fieldChange } from '../../actions';
import { Section, Button } from '../Helpers';

class SearchTeachers extends Component {

  // Navigator information for this component
  static navigationOptions = {
    title: 'Search Teacher',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 24,
      paddingRight: 0,
      alignSelf: 'center'
    },
  };


  render() {
    return (
      <View style={styles.container}>
          <Section>
            <Text style={styles.headerText}>Select Your Teacher(s)</Text>
          </Section>
          <Section>
            <Text style={styles.teacherRow}>sdada</Text>
          </Section>
          <Section>
            <Button
              onPress={this.onPressSearchTeacher}
              style={styles.buttonLogin}
            >
              Connect With Selected
            </Button>
          </Section>
          <Section>
            <Button
              onPress={this.onPressSearchTeacher}
              style={styles.buttonLogin}
            >
              Search Again
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
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  teacherRow: {
    fontSize: 20,
  }
};

export default SearchTeachers;
