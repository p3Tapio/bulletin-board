/* eslint-disable no-underscore-dangle */
import {
  GET_BULLETINS,
  FAILED_TO_GET,
  LOADING_BULLETINS,
  BULLETIN_CREATED,
} from '../actions/bulletinActions';

const initialState = {
  bulletins: [],
  error: '',
  loading: false,
};

const bulletinReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_BULLETINS:
      return { ...state, loading: true, error: '' };
    case GET_BULLETINS: {
      return { ...state, bulletins: action.payload, loading: false };
    }
    case FAILED_TO_GET:
      return { ...state, error: action.payload, loading: false };
    case BULLETIN_CREATED:
      if (state.bulletins.find((x) => x._id === action.payload._id)) return state;
      return {
        ...state,
        bulletins: state.bulletins.concat(action.payload),
        error: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default bulletinReducer;
