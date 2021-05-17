import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { MessageQueue } from '@react-md/alert';
import { loginUser, registerUser } from '../../../state/actions/userActions';
import Login from './Login';
import Register from './Register';

const Authorization = () => {
  const dispatch = useDispatch();
  const userData = useSelector((x) => x.userData);
  const location = useLocation();
  const [showRegister, setShowRegister] = useState();

  useEffect(() => {
    setShowRegister(location.state ? location.state.showRegister : false);
  }, [location.state]);

  const handleRegister = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };
  const handleLogin = (values, { resetForm }) => {
    dispatch(loginUser(values));
    resetForm();
  };

  if (userData && userData.accessToken) return <Redirect to="/userpage" />;

  return (
    <MessageQueue id="auth-error">
      <div className="centercenter" style={{ width: '100%' }}>
        {showRegister ? (
          <Register onSubmit={handleRegister} setShowRegister={setShowRegister} />
        ) : (
          <Login onSubmit={handleLogin} setShowRegister={setShowRegister} />
        )}
      </div>
      {/* )} */}
    </MessageQueue>
  );
};

export default Authorization;
