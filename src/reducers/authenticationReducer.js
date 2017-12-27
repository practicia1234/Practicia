import {
  typeLoginSuccess,
  typeLoginFail,
  typeLogoutSuccess,
  typeLogoutFail
} from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  user: '',
  success: ''
};

const authenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload };
    case typeLoginSuccess:
      return { ...state, user: action.payload };
    case typeLoginFail:
      return { ...state, error: action.payload };
    case typeLogoutSuccess:
      return { ...state, ...INITIAL_STATE, success: action.payload };
    case typeLogoutFail:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default authenticationReducer;
