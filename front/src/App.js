import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAddMessage } from '@react-md/alert';
import { clearLoginState, setUserState } from './state/actions/userActions';
import { bulletinService } from './client';

import Bulletins from './components/bulletins';
import Authorization from './components/user/auth';
import Home from './components/Home';
import Userpage from './components/user/Userpage';
import PrivateRoute from './state/PrivateRoute';
import Navbar from './components/navbar/Navbar';
import NotFound from './NotFound';
import { getBulletins, bulletinCreated } from './state/actions/bulletinActions';

const App = () => {
  const dispatch = useDispatch();
  const userError = useSelector((x) => x.userState.error);
  const bulletinsError = useSelector((x) => x.bulletinsState.error);
  const addMessage = useAddMessage();
  // TODO -- jotain klappia päivittymisessä stateen (ilmenee jos ei kirjaantuneen priva-sivulla ja normissa joo [vai toisin päin])
  bulletinService.on('created', (response) => dispatch(bulletinCreated(response)));

  useEffect(() => {
    dispatch(setUserState());
    dispatch(getBulletins());
  }, [dispatch]);

  useEffect(() => {
    if (userError || bulletinsError) {
      const error = userError || bulletinsError;
      addMessage({ action: 'Close', children: error });
      // TODO if ???
      dispatch(clearLoginState());
    }
  }, [addMessage, bulletinsError, dispatch, userError]);

  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bulletins" component={Bulletins} />
          <Route path="/auth" component={Authorization} />
          <PrivateRoute path="/userpage" component={Userpage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
};

export default App;
