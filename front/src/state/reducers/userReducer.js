/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import {
  LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  CLEAR_LOGIN_STATE,
  SET_USER_STATE,
} from '../actions/userActions';
import { getUser, setUser, setToken, getToken } from '../localStorage';

// const getInitialState = () => {
//   if (getUser() && getToken()) {
//     return { accessToken: getToken(), user: getUser(), loading: false, error: '' };
//   }
//   return {
//     userData: { accessToken: '', user: { _id: '', username: '' } },
//     loading: false,
//     error: '',
//   };
// };

const initialState = {
  userData: { accessToken: '', user: { _id: '', username: '' } },
  loading: false,
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_STATE:
      return { userData: { accessToken: getToken(), user: getUser() }, loading: false, error: '' };
    case LOADING:
      return { ...state, loading: true, error: '' };
    case REGISTER_SUCCESS:
      setUser({ _id: action.payload.user._id, username: action.payload.user.username });
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
      setUser({ _id: action.payload.user._id, username: action.payload.user.username });
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
      return { userData: {}, loading: false, error: '' };
    default:
      return state;
  }
};

export default userReducer;
