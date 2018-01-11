import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import {
  typeLoginSuccess,
  typeLoginFail,
  typeLogoutSuccess,
  typeLogoutFail,
  typeSignUpSuccess,
  typeSignUpFail,
  typeSelectTeacherAction,
  typeGetTeacherListAction,
  typeSaveSelectedTeachersWithStudentAction
} from './actionTypes';

// input field value action ================================================
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

// Login Action details==========================================
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

// LogOut Action details==========================================
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

// Signup action===============================================
export const SignUpAction = (payload) => {
  return (dispatch) => {
    console.log(payload);
    const email = payload.email;
    const password = payload.password;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => signUpSuccessCb(dispatch, user, payload))
      .catch((error) => {
        signUpFailCb(dispatch, error);
      });
  };
};
// Signup success function
const signUpSuccessCb = (dispatch, user, payload) => {
  // [Function] to Create a user in database
  const userInsertetId = createNewUser(user, payload);
  // dispatch an action
  dispatch({
    type: typeSignUpSuccess,
    payload: { userInfo: user, userInsertetId }
  });
  // redirect to dashboard
  if (payload.role === 'student') {
    dispatch(NavigationActions.navigate({ routeName: 'selectTeachers' }));
  } else {
    dispatch(NavigationActions.navigate({ routeName: 'dashboard' }));
  }
};
// signup fail function
const signUpFailCb = (dispatch, error) => {
  dispatch({
    type: typeSignUpFail,
    payload: error
  });
};
// create new user in database
function createNewUser(user, payload) {
  const userData = {
    role: payload.role,
    email: payload.email,
    password: payload.password,
    firstName: payload.firstName,
    lastName: payload.lastName,
    uid: user.uid
  };

  const userInsertetId = firebase.database().ref('users/').push(userData).key;
  return userInsertetId;
}

// selectTeacherAction=======================================================
export const selectTeacherAction = (payload) => {
  return {
    type: typeSelectTeacherAction,
    payload
  };
};

// Get teacher List========================
export const getTeacherListAction = () => {
  return (dispatch) => {
    // get teacher List
    const ref = firebase.database().ref('users');
    ref.orderByChild('role').equalTo('teacher').on('value', (snapshot) => {
      // dispatch action to reducer
      const teacherData = snapshot.val();
      dispatch({
        type: typeGetTeacherListAction,
        payload: teacherData
      });
    });
  };
};

// Seletec teacher store in Firebase========================================
export const saveSelectedTeachersWithStudentAction = (payload) => {
  return (dispatch) => {
    console.log(payload);
    firebase.database().ref(`student_teacher/${payload.userId}`).set(payload.selectedTeachers);
  };
};
