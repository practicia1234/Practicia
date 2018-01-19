import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import { development } from '../config/Firebase';

class Splash extends Component {
  static navigationOptions = {
      header: null,
    };

  componentWillMount() {
      // initialise firebase development
        firebase.initializeApp(development);
    }
  componentDidMount() {
    // Navigate to home page
    const navigateToLogin = NavigationActions.navigate({
      routeName: 'home',
      params: {}
    });
    const props = this.props;
    setTimeout(() => {
       props.navigation.dispatch(navigateToLogin);
    }, 3000);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>PRACTICIA</Text>
        </View>
        <View>
          <Text style={styles.subTitle}>Powered By : Subu</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    flex: 1,
    backgroundColor: '#2391BA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    color: '#ffffff'
  },
  subTitle: {
    paddingBottom: 10,
    color: '#ffffff',
  }
};

const mapStateToProps = (state) => { return state; };
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
