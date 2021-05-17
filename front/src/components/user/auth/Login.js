import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Text } from '@react-md/typography';
import { Button } from '@react-md/button';
import { Form } from '@react-md/form';
import { useDispatch, useSelector } from 'react-redux';
import { useAddMessage } from '@react-md/alert';
import FormInput from './FormInput';
import { loginValidation } from './validations';
import { clearLoginState } from '../../../state/actions/userActions';

const initialValues = { username: '', password: '' };

const Login = ({ onSubmit, setShowRegister }) => (
  <div className="authCard">
    <Text type="headline-4">Login</Text>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginValidation}>
      {({ handleSubmit, resetForm, values }) => (
        <LoginForm
          onSubmit={handleSubmit}
          resetForm={resetForm}
          values={values}
          setShowRegister={setShowRegister}
        />
      )}
    </Formik>
  </div>
);
const LoginForm = ({ onSubmit, resetForm, values, setShowRegister }) => {
  const dispatch = useDispatch();
  const error = useSelector((x) => x.error);
  const addMessage = useAddMessage();
  if (error) {
    addMessage({ action: 'Close', children: error });
    dispatch(clearLoginState());
  }
  const handleReset = () => {
    resetForm();
    dispatch(clearLoginState());
  };
  return (
    <Form>
      <div className="authInputWrap">
        <FormInput name="username" label="Username" type="text" value={values.username} />
        <FormInput name="password" label="Password" type="password" value={values.password} />
      </div>
      <div className="authBtnWrap">
        <div style={{ color: 'grey', margin: '5px' }}>
          <small>Don&#39;t have an account?</small>
          <br />
          <small
            style={{ cursor: 'pointer' }}
            aria-hidden="true"
            onClick={() => setShowRegister(true)}
          >
            Register here!
          </small>
        </div>
        <div className="authBtnWrap">
          <Button
            type="reset"
            onClick={() => handleReset()}
            themeType="contained"
            style={{ margin: '2px' }}
          >
            reset
          </Button>
          <Button type="submit" onClick={onSubmit} themeType="contained" style={{ margin: '2px' }}>
            submit
          </Button>
        </div>
      </div>
    </Form>
  );
};

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setShowRegister: PropTypes.func.isRequired,
};
LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  setShowRegister: PropTypes.func.isRequired,
  values: PropTypes.instanceOf(Object).isRequired,
};

export default Login;
