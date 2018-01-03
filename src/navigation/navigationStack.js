import { StackNavigator, TabNavigator } from 'react-navigation';

// Home scenes
import Home from '../scenes/Home';

// Authentication scenes
import Login from '../scenes/authentication/Login';
import SignUpStep from '../scenes/authentication/SignUpStep';

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
import Individuals from '../scenes/practice/Individuals';

// Group
import Groups from '../scenes/group/Groups';

// Upload
import UploadsScreen from '../scenes/upload/UploadsScreen';
import Pending from '../scenes/upload/Pending';

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
      activeBackgroundColor: '#33ACDE',
      activeTintColor: 'white'
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
    flex: 1 / 2,
    tabBarOptions: {
      activeBackgroundColor: '#33ACDE',
      activeTintColor: 'white'
    }
  }
  )
};

// Navigation defined
const navigator = StackNavigator({
  home: { screen: Home },
  signup: { screen: SignUpStep },
  login: { screen: Login },
  dashboard: {
    screen: TabNavigator({
      Submissions: submissionMenu,
      Students: studentMenu,
      Awards: { screen: AwardsScreen },
      GameOn: { screen: GameOnScreen },
      Uploads: { screen: UploadsScreen }
    }, {
      tabBarPosition: 'bottom',
      flex: 1 / 2,
      tabBarOptions: {
        activeBackgroundColor: '#33ACDE',
        activeTintColor: 'white'
      }
    }
    )
  }
});

export default navigator;
