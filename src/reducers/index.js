import { combineReducers } from 'redux';
import CounterReducer from './counterReducer';
import NavigationReducer from './navigationReducer';
import authenticationReducer from './authenticationReducer';

const AppReducer = combineReducers({
  CounterReducer,
  authenticationReducer,
  NavigationReducer
});

export default AppReducer;
