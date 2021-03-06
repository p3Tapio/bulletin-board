import { bulletinService } from '../../client';

export const LOADING_BULLETINS = 'LOADING_BULLETINS';
export const GET_BULLETINS = 'GET_BULLETINS';
export const FAILED_TO_GET = 'FAILED_TO_GET';
export const BULLETIN_CREATED = 'BULLETIN_CREATED';

export const getBulletins = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING_BULLETINS });
    try {
      const res = await bulletinService.find({});
      dispatch({
        type: GET_BULLETINS,
        payload: res,
      });
    } catch (err) {
      dispatch({
        type: FAILED_TO_GET,
        payload: err.message,
      });
    }
  };
};

export const bulletinCreated = (newBulletin) => (dispatch) => {
  dispatch({ type: BULLETIN_CREATED, payload: newBulletin });
};
