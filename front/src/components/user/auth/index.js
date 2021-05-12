import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../state/actions/userActions';
import Register from './Register';

const Authorization = () => {
  const dispatch = useDispatch();
  const state = useSelector((x) => x);
  const [showRegister, setShowRegister] = useState(true);

  const handleRegister = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };

  return (
    <>
      {state.userData.accessToken ? (
        <p>PÖÖ</p>
      ) : (
        <div className="centercenter" style={{ width: '100%' }}>
          {showRegister ? (
            <Register onSubmit={handleRegister} setShowRegister={setShowRegister} />
          ) : (
            <p>Moi</p>
          )}
        </div>
      )}
    </>
  );
};

export default Authorization;
