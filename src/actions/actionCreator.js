import { NavigationActions } from 'react-navigation';
import { incrementCounter, decrementCounter } from './actionTypes';

export const incrementAction = (payload) => {
  return (dispatch) => {
    console.log(incrementCounter);
      dispatch({
        type: incrementCounter,
        payload: 'payloadddData'
      });
      //dispatch(NavigationActions.navigate({ routeName: 'screen2' }));
  };
};

export const decrementAction = () => ({
  type: decrementCounter
});

export const screen2Action = (payload) => {
  return (dispatch) => {
    console.log(screen2Action);
    console.log(payload);
      dispatch({
        type: 'MOVED_2_SCREEN3',
        payload: 'payloadddData'
      });
  };
};
