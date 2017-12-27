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

import { Button, Section } from './helpers';
import { userType } from '../config/MasterData';
import { firebaseEnvAction } from '../actions/HomeAction';

class Home extends Component {
  static navigationOptions = {
    title: '.: Practicia :.'
  };

onPressSignupAs(userInfo) {
  // Navigate to sign up page with the user information
  console.log(userInfo);
}

onPressLogin() {
  // Navigate to login page
  const navigateToLogin = NavigationActions.navigate({
    routeName: 'login',
    params: {}
  });
  this.props.navigation.dispatch(navigateToLogin);
}

firebaseEnv(val) {
  this.props.firebaseEnvAction(val);
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
              <Text style={styles.firebaseText}>Firebase:
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

const styles = {
  firebaseText: {
    fontSize: 20
  },
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
  userType: {
    fontSize: 23,
    fontWeight: 'bold',
    backgroundColor: '#3BAFDA',
    margin: 10,
    padding: 10,
    textAlign: 'center',
    color: '#fff',
  },
  contentArea: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  logo: {
    width: 250,
    height: 75,
  },
  signInAs: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  LoginBox: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
  },
  LoginText: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonLogin: {
    backgroundColor: '#C4C4C4',
  },
  buttonText: {
    color: '#000000',
  }
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  firebaseEnvAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
