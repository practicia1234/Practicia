import AppNavigator from '../navigation/navigationStack';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('splash')
);
const navigationReducer = (state = initialState, action) => {
  //console.log(action);
  const newState = AppNavigator.router.getStateForAction(action, state);
  //console.log(newState);
  return newState || state;
};

export default navigationReducer;
