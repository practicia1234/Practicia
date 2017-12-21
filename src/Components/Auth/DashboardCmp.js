import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { fieldChange, LogoutAction } from '../../actions';
import { Section, Alert, Button } from '../Helpers';

class DashboardCmp extends Component {

  // Navigator information for this component
  static navigationOptions = {
    title: 'Dashboard',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 15,
      paddingRight: 0,
      alignSelf: 'center'
    },
  };
  componentWillReceiveProps(nextProps) {
    // Navigate to next screen
    console.log(nextProps);
    console.log('ddd');
    if(nextProps.redirect =='login'){
      console.log(nextProps);
      const { navigate } = this.props.navigation;
      navigate(nextProps.redirect, {});
    }
  }
  LogoutAction(){
    this.props.LogoutAction(); // Action call
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Section>
              <Text>Welcome to PRACTICIA!!</Text>
          </Section>
          <Section>
            <Button
              onPress={this.LogoutAction.bind(this)}
              style={styles.buttonLogin}
            >
              Logout
            </Button>
          </Section>
        </ScrollView>
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
    padding: 10,
    flex: 1
  },
};

const mapStateToProps = ({ auth }) => {
  console.log(auth);
  return auth;
};

export default connect(mapStateToProps, { LogoutAction })(DashboardCmp);
