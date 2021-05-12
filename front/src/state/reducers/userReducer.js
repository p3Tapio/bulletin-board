/* eslint-disable no-console */
import { LOADING, REGISTER_SUCCESS, REGISTER_FAILED } from '../actions/userActions';
import { getUser, setUser } from '../sessionStorage';

const getInitialState = () => {
  if (getUser()) {
    const userData = getUser();
    return { userData, loading: false, error: '' };
  }
  return {
    userData: { accessToken: '', user: { _id: '', username: '' } },
    loading: false,
    error: '',
  };
};

const initialState = getInitialState();

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: '' };
    case REGISTER_SUCCESS:
      setUser(action.user);
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case REGISTER_FAILED:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default userReducer;
