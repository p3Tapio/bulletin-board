/* eslint-disable no-underscore-dangle */
import { useAddMessage } from '@react-md/alert';
import { bulletinService } from '../client/index';
import { getUser } from '../state/localStorage';

const useBulletin = () => {
  const addMessage = useAddMessage();

  const createBulletin = async (values, setShowDialog) => {
    try {
      const user = getUser();
      await bulletinService.create({ ...values, user: user._id });
      setShowDialog(false);
    } catch (err) {
      addMessage({ action: 'Close', children: `Error: ${err.message}` });
    }
  };

  return { createBulletin };
};
export default useBulletin;
