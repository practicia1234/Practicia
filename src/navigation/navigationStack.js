import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from '../components/Home';
import Login from '../components/authentication/Login';
//import Dashboard from '../components/Dashboard';
//import FeedScreen from '../components/FeedScreen';
import AwardsScreen from '../components/AwardsScreen';
//import StudentsScreen from '../components/StudentsScreen';
import GameOnScreen from '../components/GameOnScreen';
import UploadsScreen from '../components/UploadsScreen';
import AllPractice from '../components/AllPractice';
import Practice from '../components/Practice';
import PlayingTests from '../components/PlayingTests';
import Questions from '../components/Questions';
import Individuals from '../components/Individuals';
import Groups from '../components/Groups';
import Pending from '../components/Pending';


import SignUpStep from '../components/authentication/SignUpStep';

const navigator = StackNavigator({
  home: { screen: Home },
  login: { screen: Login },
  dashboard: {
    screen: TabNavigator({
      Submissions: {
        screen: TabNavigator({
          All: { screen: AllPractice },
          Practice: { screen: Practice },
          PlayingTests: { screen: PlayingTests },
          Questions: { screen: Questions },
        }, {
          tabBarPosition: 'top',
          flex: 2 / 3,
          tabBarOptions: {
            activeBackgroundColor: '#33ACDE',
            activeTintColor: 'white',
          },
        }
      )
       },
      Students: {
        screen: TabNavigator({
          Individuals: { screen: Individuals },
          Groups: { screen: Groups },
          Pending: { screen: Pending },
        }, {
          tabBarPosition: 'top',
          flex: 1 / 2,
          tabBarOptions: {
            activeBackgroundColor: '#33ACDE',
            activeTintColor: 'white',

          },
        }
      )
      },
      Awards: { screen: AwardsScreen },
      GameOn: { screen: GameOnScreen },
      Uploads: { screen: UploadsScreen },
    }, {
      tabBarPosition: 'bottom',
      flex: 1 / 2,
      tabBarOptions: {
        activeBackgroundColor: '#33ACDE',
        activeTintColor: 'white',
        }
      }
    )
  },
  signup: { screen: SignUpStep },
});

export default navigator;
