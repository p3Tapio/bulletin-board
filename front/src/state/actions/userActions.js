import feathersClient, { userService } from '../../client';

export const SET_USER_STATE = 'GET_USER_STATE';
export const LOADING = 'LOADING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGOUT_FAILED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const CLEAR_LOGIN_STATE = 'CLEAR_LOGIN_STATE';

export const registerUser = (newUser) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const res = await userService.create(newUser);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAILED,
        payload: err.message,
      });
    }
  };
};
export const loginUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const res = await feathersClient.authenticate({ ...user, strategy: 'local' });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res,
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAILED,
        payload: err.message,
      });
    }
  };
};
export const clearLoginState = () => (dispatch) => dispatch({ type: CLEAR_LOGIN_STATE });
export const setUserState = () => (dispatch) => dispatch({ type: SET_USER_STATE });

export const loading = () => {
  return { type: LOADING };
};
