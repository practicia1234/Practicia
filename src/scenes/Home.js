import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Switch
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';

import { Button, Section } from '../components';
import { userType } from '../config/MasterData';
import { firebaseEnvAction } from '../actions/HomeAction';
import { development, production } from '../config/Firebase';
import { styles } from '../styles/HomeStyle';


class Home extends Component {
  static navigationOptions = {
    title: '.: Practicia :.',
    header: null
  };

  componentWillMount() {
    // initialise firebase development
      firebase.initializeApp(development);
  }

  onPressSignupAs(userInfo) {
    // Navigate to sign up page with the user information
    const navigateToSignUp = NavigationActions.navigate({
      routeName: 'signup',
      params: userInfo
    });
    this.props.navigation.dispatch(navigateToSignUp);
  }

  onPressLogin() {
    // Navigate to login page
    const navigateToLogin = NavigationActions.navigate({
      routeName: 'login',
      params: {}
    });
    this.props.navigation.dispatch(navigateToLogin);
  }

// change firebase database based on toggle
  firebaseEnv(val) {
    this.props.firebaseEnvAction(val);
    if (val === true) {
      firebase.app().delete().then(() => {
        firebase.initializeApp(production);
      });
    } else {
      firebase.app().delete().then(() => {
        firebase.initializeApp(development);
      });
    }
  }


  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../assets/images/logo.png')}
              />
            </View>
          <View style={styles.contentArea}>
            <Text style={styles.signInAs}>Sign Up As...</Text>
            <Section>
              <Button
              onPress={this.onPressSignupAs.bind(this, userType.teacher)}
              >
                {userType.teacher.showText}
              </Button>
            </Section>
            <Section>
              <Button
              onPress={this.onPressSignupAs.bind(this, userType.parent)}
              >{userType.parent.showText}</Button>
            </Section>
            <Section>
              <Button
              onPress={this.onPressSignupAs.bind(this, userType.student)}
              >
              {userType.student.showText}
              </Button>
            </Section>
          </View>
          <View style={styles.LoginBox}>
            <Text style={styles.LoginText}>Already have an account? </Text>
            <Section>
              <Button
              style={styles.buttonLogin}
              styleText={styles.buttonText}
              onPress={this.onPressLogin.bind(this)}
              >
                Login
              </Button>
            </Section>
            <Section>
              <Text style={styles.firebaseText}>Production:
                <Switch
                  value={this.props.HomeReducer.firebaseToggle}
                  onValueChange={(val) => this.firebaseEnv(val)}
                  disabled={false}
                  activeText={'Prod'}
                  inActiveText={'Dev'}
                  circleSize={30}
                  barHeight={1}
                  circleBorderWidth={3}
                  backgroundActive={'green'}
                  backgroundInactive={'gray'}
                  circleActiveColor={'#30a566'}
                  circleInActiveColor={'#000000'}
                />
              </Text>
            </Section>
          </View>
        </View>
        </ScrollView>
    );
  }
}


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  firebaseEnvAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
