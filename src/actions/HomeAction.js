import {
  typeFirebaseEnviornment
} from './actionTypes';

export const firebaseEnvAction = (payload) => {
  return (dispatch) => {
    // dispatch to reducer
      dispatch({
        type: typeFirebaseEnviornment,
        payload
      });
  };
};
