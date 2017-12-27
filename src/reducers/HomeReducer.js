import {
  typeFirebaseEnviornment,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  error: '',
  success: '',
  firebaseToggle: false
};

const HomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typeFirebaseEnviornment:
      return { ...state, firebaseToggle: action.payload };

    default:
      return state;
  }
};

export default HomeReducer;
