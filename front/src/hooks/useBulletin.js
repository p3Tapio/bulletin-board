/* eslint-disable no-underscore-dangle */
import { useAddMessage } from '@react-md/alert';
import { useDispatch } from 'react-redux';
import { updateUserBulletins } from '../state/actions/userActions';
import { bulletinService } from '../client/index';
import { getUser } from '../state/localStorage';

const useBulletin = () => {
  const dispatch = useDispatch();
  const addMessage = useAddMessage();

  const createBulletin = async (values, setShowDialog) => {
    try {
      const user = getUser();
      const res = await bulletinService.create({ ...values, user: user._id });
      dispatch(updateUserBulletins(res));
      setShowDialog(false);
    } catch (err) {
      addMessage({ action: 'Close', children: `Error: ${err.message}` });
    }
  };

  return { createBulletin };
};
export default useBulletin;
