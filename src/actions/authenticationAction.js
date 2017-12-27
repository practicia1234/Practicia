import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import {
  typeLoginSuccess,
  typeLoginFail,
  typeLogoutSuccess,
  typeLogoutFail
} from './actionTypes';

export const onFieldChangeAction = (payload) => {
  return (dispatch) => {
    // dispatch to reducer
      dispatch({
        type: payload.actionType,
        payload: payload.value
      });
      //dispatch(NavigationActions.navigate({ routeName: 'screen2' }));
  };
};

// Login Action details
export const loginAction = (payload) => {
  return (dispatch) => {
    // try to firebase login
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => loginSuccess(dispatch, user))
      .catch((error) => {
        loginFail(dispatch, error);
    });
  };
};
function loginSuccess(dispatch, user) {
  // dispatch to reducer
    dispatch({
      type: typeLoginSuccess,
      payload: user
    });
    // redirect to dashboard
    dispatch(NavigationActions.navigate({ routeName: 'dashboard' }));
}
function loginFail(dispatch, error) {
  // dispatch to reducer
    dispatch({
      type: typeLoginFail,
      payload: {
        status: true,
        msg: error.message
      }
    });
}

// LogOut Action details
export const logoutAction = () => {
  return (dispatch) => {
    firebase.auth().signOut()
      .then(user => logoutSuccess(dispatch, user))
      .catch((error) => {
        logoutFail(dispatch, error);
    });
  };
};
function logoutSuccess(dispatch) {
  // dispatch to reducer
    dispatch({
      type: typeLogoutSuccess,
      payload: {
        status: true,
        msg: 'Successfully logged out!!'
      }
    });
    // redirect to dashboard
    dispatch(NavigationActions.navigate({ routeName: 'login' }));
}
function logoutFail(dispatch, error) {
  // dispatch to reducer
    dispatch({
      type: typeLogoutFail,
      payload: {
        status: true,
        msg: error.message
      }
    });
}
