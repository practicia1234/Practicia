import { StackNavigator } from 'react-navigation';
import SignUpStep1 from './Components/Auth/SignUpStep1';
import SignUpStep2 from './Components/Auth/SignUpStep2';
import SignUpStep3 from './Components/Auth/SignUpStep3';
import SearchTeachers from './Components/Auth/SearchTeachers';
import LoginCmp from './Components/Auth/LoginCmp';
import DashboardCmp from './Components/Auth/DashboardCmp';


const RouterComponent = StackNavigator({
  login: { screen: LoginCmp },
  SignUpStep1: { screen: SignUpStep1 },
  SignUpStep2: { screen: SignUpStep2 },
  SignUpStep3: { screen: SignUpStep3 },
  SearchTeachers: { screen: SearchTeachers },
  dashboard: { screen: DashboardCmp },
});


export default RouterComponent;
