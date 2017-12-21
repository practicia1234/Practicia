const INITIAL_STATE = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  user: null,
  error: null,
  loading: false,
  status: false,
  redirectTarget: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload.value };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload.value };
    case 'FIRST_NAME':
      return { ...state, firstName: action.payload.value };
    case 'LAST_NAME':
      return { ...state, lastName: action.payload.value };
    case 'SEARCH_TEACHER_CHANGED':
      return { ...state, seacrhTeacherText: action.payload.value };

    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case 'SIGNUP_FAIL':
      return {
        ...state,
        error: 'Signup Failed.',
        coreError: action.payload,
        loading: false
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        redirectTarget: 'dashboard'
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        ...INITIAL_STATE,
        status: true,
        error: {
            msg: 'Authentication Failed',
            coreError: action.payload,
        },
        user: null,
        loading: false
      };
      case 'LOGOUT_SUCCESS':
        return {
          ...state,
          ...INITIAL_STATE,
          user: null,
          msg: action.payload,
          redirectTarget: 'login'
        };
      case 'LOGOUT_FAIL':
        return {
          ...state,
          status: false,
          msg: action.payload,
        };

    default:
      return state;
  }
};
