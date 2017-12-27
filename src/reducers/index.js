import { combineReducers } from 'redux';
import CounterReducer from './counterReducer';
import NavigationReducer from './navigationReducer';
import authenticationReducer from './authenticationReducer';
import HomeReducer from './HomeReducer';

const AppReducer = combineReducers({
  CounterReducer,
  HomeReducer,
  authenticationReducer,
  NavigationReducer
});

export default AppReducer;
