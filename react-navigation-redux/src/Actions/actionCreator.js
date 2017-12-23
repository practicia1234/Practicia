import { NavigationActions } from "react-navigation";
import { incrementCounter, decrementCounter } from "./actionTypes";

export const incrementAction = (payload) => {
  return (dispatch) => {
    console.log(incrementCounter);
      dispatch({
        type: incrementCounter,
        payload: 'payloadddData'
      });
      dispatch(NavigationActions.navigate({ routeName: 'screen2' }));
  };
};



const decrementAction = () => ({
  type: decrementCounter
});

export {  decrementAction };
