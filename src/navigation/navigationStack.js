import React from 'react';
import { Text, Animated, Easing } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

// Home scenes
import Home from '../scenes/Home';
import Dashboard from '../scenes/Dashboard';


// Authentication scenes
import Login from '../scenes/authentication/Login';
import SignUpStep from '../scenes/authentication/SignUpStep';
import SelectTeachers from '../scenes/authentication/SelectTeachers';


// import Dashboard from '../components/Dashboard'
// import FeedScreen from '../components/FeedScreen'
import AwardsScreen from '../scenes/award/AwardsScreen';
// import StudentsScreen from '../components/StudentsScreen'
import GameOnScreen from '../scenes/game/GameOnScreen';

// All practice scenes
import AllPractice from '../scenes/practice/AllPractice';
import Practice from '../scenes/practice/Practice';
import PlayingTests from '../scenes/practice/PlayingTests';
import Questions from '../scenes/practice/Questions';
import Individuals from '../scenes/students/individuals';
import FirstScreen from '../scenes/drawer/FirstScreen';
import SecondScreen from '../scenes/drawer/SecondScreen';
import ThirdScreen from '../scenes/drawer/ThirdScreen';

// Group
import Groups from '../scenes/students/groups';

// Upload
import UploadsScreen from '../scenes/upload/UploadsScreen';
import Pending from '../scenes/students/pending';
//import DrawerContainer from '.../components/DrawerContainer'

// const noTransitionConfig = () => ({
//   transitionSpec: {
//     duration: 0,
//     timing: Animated.timing,
//     easing: Easing.step0
//   }
// });
// Constant for tab menus
const submissionMenu = {
  screen: TabNavigator({
    All: { screen: AllPractice },
    Practice: { screen: Practice },
    PlayingTests: { screen: PlayingTests },
    Questions: { screen: Questions }
  }, {
    tabBarPosition: 'top',
    flex: 2 / 3,
    tabBarOptions: {
      activeTintColor: '#33ACDE',
      labelStyle: {
          fontSize: 12,
            },
      tabStyle: {
        width: 50,
                },
    }
  }
  )
};
const studentMenu = {
  screen: TabNavigator({
    Individuals: { screen: Individuals },
    Groups: { screen: Groups },
    Pending: { screen: Pending }
  }, {
    tabBarPosition: 'top',
    flex: 2 / 3,
    tabBarOptions: {
      activeTintColor: '#33ACDE',
      labelStyle: {
          fontSize: 12,
            },
      tabStyle: {
        width: 50,
                },
    }
  }
  )
};
const DrawerStack = DrawerNavigator({
  screen1: { screen: FirstScreen },
  screen2: { screen: SecondScreen },
  screen3: { screen: ThirdScreen },
});

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    headerStyle: { backgroundColor: '#4C3E54' },
    title: 'Welcome!',
    headerTintColor: 'white',
  })
});

const LoginStack = StackNavigator({
  home: { screen: Home },
  signup: { screen: SignUpStep },
  login: { screen: Login },
  selectTeachers: { screen: SelectTeachers },
  dashboard: {
      screen: TabNavigator({
        Submissions: submissionMenu,
        Students: studentMenu,
        Awards: { screen: AwardsScreen },
        GameOn: { screen: GameOnScreen },
        Uploads: { screen: UploadsScreen }
      }, {
        tabBarPosition: 'bottom',

        tabBarOptions: {
          activeTintColor: '#33ACDE',
          labelStyle: {
              fontSize: 12,
                },
          tabStyle: {
            width: 50,
                    }

        }
      }),
      },
},
{
  headerMode: 'float',
  navigationOptions: {
    headerStyle: { backgroundColor: '#E73536' },
    title: 'You are not logged in',
    headerTintColor: 'white'
  }
});

const navigator = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack'
});
export default navigator;
