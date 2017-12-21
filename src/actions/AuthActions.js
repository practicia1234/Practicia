import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

export const fieldChange = (payload) => {
  return {
    type: payload.actionType,
    payload
  };
};

export const SignUpAction = (payload) => {
  return (dispatch) => {
    console.log(payload);
    const email = payload.value.othersInfo.email;
    const password = payload.value.othersInfo.password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => signUpSuccess(dispatch, user, payload))
      .catch((error) => {
        signUpFail(dispatch, error);
      });
  };
};

// Signup success function
const signUpSuccess = (dispatch, user, payload) => {
  // [Function] to Create a user in database
  createNewUser(user, payload);
  // dispatch an action
  dispatch({
    type: 'SIGNUP_SUCCESS',
    payload: user
  });
};

// signup fail function
const signUpFail = (dispatch, error) => {
  dispatch({
    type: 'SIGNUP_FAIL',
    payload: error
  });
};

// create new user in database
function createNewUser(user, payload) {
  const userData = {
    role: payload.value.role,
    email: payload.value.othersInfo.email,
    password: payload.value.othersInfo.password,
    firstName: payload.value.othersInfo.firstName,
    lastName: payload.value.othersInfo.lastName,
  };
  firebase.database().ref('users/').push(userData);
}




// Login actions
export const LoginAction = (payload) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => loginSuccess(dispatch, user))
      .catch((error) => {
        loginFail(dispatch, error);
    });
  };
};

// Login success function
const loginSuccess = (dispatch, user) => {
  // dispatch an action
  dispatch({
    type: 'LOGIN_SUCCESS',
    payload: user
  });
};
// Login fail function
const loginFail = (dispatch, error) => {
  dispatch({
    type: 'LOGIN_FAIL',
    payload: error
  });
};


// LogoutAction actions
export const LogoutAction = () => {
  return (dispatch) => {
    firebase.auth().signOut()
      .then(user => logoutSuccess(dispatch, user))
      .catch((error) => {
        logoutFail(dispatch, error);
    });
  };
}
  // Login success function
  const logoutSuccess = (dispatch, user) => {
    // dispatch an action
    dispatch({
      type: 'LOGOUT_SUCCESS',
      payload: user
    });
  };
  // Login fail function
  const logoutFail = (dispatch, error) => {
    dispatch({
      type: 'LOGOUT_FAIL',
      payload: error
    });
  };



function navvv(dispatch){
  const navigateAction = NavigationActions.navigate({
    routeName: 'dashboard',
    params: 'dd',
  })
  this.props.navigation.dispatch(navigateAction)
}
