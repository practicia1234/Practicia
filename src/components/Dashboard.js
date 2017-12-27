import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';

import { Button, Section } from './helpers';
import { logoutAction } from '../actions/authenticationAction'; // action included

class Home extends Component {
  static navigationOptions = {
    title: 'Dashboard'
  };

  onPressLogout() {
    this.props.logoutAction(); // call action
    console.log('onPressLogout');
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <View style={styles.contentArea}>
            <Text style={styles.signInAs}>Welcome to PRACTICIA!!!</Text>
            <Section>
              <Button onPress={this.onPressLogout.bind(this)}>
                Logout
              </Button>
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
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = { logoutAction };
export default connect(mapStateToProps, mapDispatchToProps)(Home);
