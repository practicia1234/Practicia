import {
  typeLoginSuccess,
  typeLoginFail,
  typeLogoutSuccess,
  typeLogoutFail,
  typeSignUpSuccess,
  typeSignUpFail,
  typeSelectTeacherAction,
  typeGetTeacherListAction
} from '../actions/actionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  user: '',
  success: '',
  firstName: '',
  lastName: '',
  switchButton: false,
  teacherIds: [],
  teacherList: []
};

const authenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

// Field value change action
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload };
    case 'FIRST_NAME':
      return { ...state, firstName: action.payload };
    case 'LAST_NAME':
      return { ...state, lastName: action.payload };

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
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case typeSignUpFail:
      return { ...state, error: action.payload };

//typeSelectTeacherAction
    case typeSelectTeacherAction:
      return {
        ...state,
        teacherSelected: action.payload,
        teacherIds: {
          ...state.teacherIds,
          [action.payload.teacherInfo.id]: action.payload.switchButton
        }
      };

//typeGetTeacherListAction
    case typeGetTeacherListAction:
      return {
        ...state,
        teacherList: action.payload
      };

// Default action
    default:
      return state;
  }
};

export default authenticationReducer;
