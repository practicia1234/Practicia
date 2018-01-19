import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

// Home scenes
import Home from '../scenes/Home';
import Splash from '../scenes/Splash';

// Authentication scenes
import Login from '../scenes/authentication/Login';
import SignUpStep from '../scenes/authentication/SignUpStep';
import SelectTeachers from '../scenes/authentication/SelectTeachers';
import AddChild from '../scenes/authentication/AddChild';

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

// Group
import Groups from '../scenes/students/groups';

// Upload
import UploadsScreen from '../scenes/upload/UploadsScreen';
import Pending from '../scenes/students/pending';

// Tasks
import TaskList from '../scenes/task/TaskList';

//import CustomDrawerContentComponent from './CustomDrawerContentComponent';


// Menu with out login
const drawMenuWithOutLogin = DrawerNavigator({
  home: { screen: Home,
    navigationOptions: {
      drawerLabel: 'Home'
    } },
  login: { screen: Login },
  addchild: { screen: AddChild,
      navigationOptions: {
        drawerLabel: 'Add new child'
      },
    },
  selectTeachers: { screen: SelectTeachers },
});

// Menu with login
  // dashboard tab menu /// Constant for tab menus
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

const drawMenuWithLogin = DrawerNavigator({
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
          labelStyle: { fontSize: 12 },
          tabStyle: { width: 50 }
        }
      }
    ),
    navigationOptions: {
      drawerLabel: 'Dashboard'
    }
  },
  taskList: { screen: TaskList,
    navigationOptions: {
      drawerLabel: 'Task List'
    } },
});

// Navigation defined
const navigator = StackNavigator({
  splash: { screen: Splash },
  home: { screen: drawMenuWithOutLogin }, // drawer menu
  signup: { screen: SignUpStep },
  selectTeachers: { screen: SelectTeachers },
  addchild: { screen: AddChild },
  dashboard: { screen: drawMenuWithLogin }  // drawer menu
});

export default navigator;
