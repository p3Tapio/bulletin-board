/* eslint-disable no-underscore-dangle */
import {
  LOADING_USER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CLEAR_LOGIN_STATE,
  SET_USER_STATE,
  UPDATE_BULLETINS,
} from '../actions/userActions';
import {
  getUser,
  setUser,
  setToken,
  getToken,
  clearLocalStorage,
  addBulletin,
} from '../localStorage';
import feathersClient from '../../client';

const initialState = {
  userData: { accessToken: '', user: { _id: '', username: '', bulletins: [] } },
  loading: false,
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USER:
      return { ...state, loading: true, error: '' };
    case SET_USER_STATE:
      if (getToken()) feathersClient.reAuthenticate();
      return {
        userData: { accessToken: getToken(), user: getUser() },
        loading: false,
        error: '',
      };
    case REGISTER_SUCCESS:
      setUser({
        _id: action.payload.user._id,
        username: action.payload.user.username,
        bulletins: [],
      });
      setToken(action.payload.accessToken);
      return {
        ...state,
        loading: false,
        error: '',
        userData: action.payload,
      };
    case REGISTER_FAILED:
      return { ...state, error: action.payload, loading: false };
    case LOGIN_SUCCESS:
      setUser({
        _id: action.payload.user._id,
        username: action.payload.user.username,
        bulletins: action.payload.user.bulletins,
      });
      setToken(action.payload.accessToken);
      return {
        ...state,
        loading: false,
        error: '',
        userData: action.payload,
      };
    case LOGIN_FAILED:
      return { ...state, error: action.payload, loading: false };
    case CLEAR_LOGIN_STATE:
      clearLocalStorage();
      // -- tarpeen? "calls the remove method of the authentication service" (käyttöön ainakin jos sessiot backendiin..)
      feathersClient.logout();
      return { userData: {}, loading: false, error: '' };
    case UPDATE_BULLETINS:
      addBulletin(action.payload);
      return {
        userData: {
          ...state.userData,
          user: {
            ...state.userData.user,
            bulletins: state.userData.user.bulletins.concat(action.payload),
          },
        },
        loading: false,
        error: '',
      };
    default:
      return state;
  }
};

export default userReducer;
