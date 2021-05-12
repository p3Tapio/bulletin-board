import { userService } from '../../client';

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
        user: res,
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAILED,
        error: err.message,
      });
    }
  };
};

export const loading = () => {
  return { type: LOADING };
};
