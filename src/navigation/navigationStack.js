import { StackNavigator } from 'react-navigation';
import Home from '../components/Home';
import Login from '../components/authentication/Login';
import Dashboard from '../components/Dashboard';
import SignUpStep from '../components/authentication/SignUpStep';

const navigator = StackNavigator({
  home: { screen: Home },
  login: { screen: Login },
  dashboard: { screen: Dashboard },
  signup: { screen: SignUpStep },
});

export default navigator;
