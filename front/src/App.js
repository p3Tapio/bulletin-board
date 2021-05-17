import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserState } from './state/actions/userActions';

import Authorization from './components/user/auth';
import Home from './components/Home';
import Userpage from './components/user/Userpage';

import PrivateRoute from './state/PrivateRoute';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(setUserState()), [dispatch]);
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '50px' }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Authorization} />
          <PrivateRoute path="/userpage" component={Userpage} />
        </Switch>
      </div>
    </>
  );
};

export default App;
