import {
  typeLoginSuccess,
  typeLoginFail,
  typeLogoutSuccess,
  typeLogoutFail,
  typeSignUpSuccess,
  typeSignUpFail,
  typeSelectTeacherAction,
  typeGetTeacherListAction,
  typeAddChildAction
} from '../actions/actionTypes';

const INITIAL_STATE = {
  loader: false,
  email: '',
  password: '',
  error: '',
  user: '',
  success: '',
  firstName: '',
  lastName: '',
  username: '',
  switchButton: false,
  teacherIds: [],
  teacherList: []
};

const authenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

// Loader 
    case 'LOADER':
      return { ...state, loader: true };

// Field value change action
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload };
    case 'FIRST_NAME':
      return { ...state, firstName: action.payload };
    case 'LAST_NAME':
      return { ...state, lastName: action.payload };
    case 'USERNAME':
      return { ...state, username: action.payload };

// Login action
    case typeLoginSuccess:
      return { ...state, user: action.payload };
    case typeLoginFail:
      return { ...state, error: action.payload };
    case typeLogoutSuccess:
      return { ...state, ...INITIAL_STATE, success: action.payload };
    case typeLogoutFail:
      return { ...state, error: action.payload };

// Signup action
    case typeSignUpSuccess:
      return { ...state, ...INITIAL_STATE, loader: false, user: action.payload };
    case typeSignUpFail:
      return { ...state, loader: false, error: action.payload };

//typeSelectTeacherAction
    case typeSelectTeacherAction:
      return {
        ...state,
        teacherSelected: action.payload,
        teacherIds: {
          ...state.teacherIds,
          [action.payload.teacherInfo.key]: action.payload.switchButton
        }
      };

//typeGetTeacherListAction
    case typeGetTeacherListAction:
      return {
        ...state,
        loader: false,
        teacherList: action.payload
      };
// add child
    case typeAddChildAction:
      return {
        ...state,
        loader: false,
        user: action.payload
      };

// Default action
    default:
      return state;
  }
};

export default authenticationReducer;
