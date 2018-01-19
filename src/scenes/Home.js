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
import { homeStyles } from '../styles/HomeStyle';


class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    //const { params = {} } = navigation.state;
    return {
      title: 'PRACTICIA',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingRight: 0,
        alignSelf: 'center',
        color: '#ffffff'
      },
      headerStyle: {
        backgroundColor: '#2391BA',
      },
      headerLeft: <Text
        onPress={() => navigation.navigate('DrawerOpen')}
      >
      Menu
      </Text>
    };
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
      <ScrollView contentContainerStyle={homeStyles.contentContainer}>
        <View style={homeStyles.container}>
          <View style={homeStyles.logoContainer}>
              <Image
                style={homeStyles.logo}
                source={require('../assets/images/logo.png')}
              />
            </View>
          <View style={homeStyles.contentArea}>
            <Text style={homeStyles.signInAs}>Sign Up As...</Text>
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
          <View style={homeStyles.LoginBox}>
            <Text style={homeStyles.LoginText}>Already have an account? </Text>
            <Section>
              <Button
              style={homeStyles.buttonLogin}
              styleText={homeStyles.buttonText}
              onPress={this.onPressLogin.bind(this)}
              >
                Login
              </Button>
            </Section>
            <Section>
              <Text style={homeStyles.firebaseText}>Production:
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
