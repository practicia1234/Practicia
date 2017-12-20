import firebase from 'firebase';

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

// signup fail function
const signUpFail = (dispatch, error) => {
  dispatch({
    type: 'SIGNUP_FAIL',
    payload: error
  });
};
