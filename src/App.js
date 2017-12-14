/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
//import HomeScreen from './Components/HomeScreen';
//import ProfileScreen from './Components/ProfileScreen';
import SignUpStep1 from './Components/Auth/SignUpStep1';
import SignUpStep2 from './Components/Auth/SignUpStep2';


const App = StackNavigator({
  SignUpStep1: { screen: SignUpStep1 },
  SignUpStep2: { screen: SignUpStep2 },
});


export default App;
