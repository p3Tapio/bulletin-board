import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import useQuery from '../../../hooks/useQuery';
import { loginUser, registerUser } from '../../../state/actions/userActions';
import Login from './Login';
import Register from './Register';

const Authorization = () => {
  const dispatch = useDispatch();
  const user = useSelector((x) => x.userState.userData);
  const query = useQuery();
  const register = query.get('register');
  const [showRegister, setShowRegister] = useState();

  useEffect(() => {
    setShowRegister(register === 'true');
  }, [register]);

  const handleRegister = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };
  const handleLogin = (values, { resetForm }) => {
    dispatch(loginUser(values));
    resetForm();
  };

  if (user && user.accessToken) return <Redirect to="/userpage" />;

  return (
    <div className="centercenter" style={{ width: '100%' }}>
      {showRegister ? (
        <Register onSubmit={handleRegister} setShowRegister={setShowRegister} />
      ) : (
        <Login onSubmit={handleLogin} setShowRegister={setShowRegister} />
      )}
    </div>
  );
};

export default Authorization;
