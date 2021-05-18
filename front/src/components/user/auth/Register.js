import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Text } from '@react-md/typography';
import { Button } from '@react-md/button';
import { Form } from '@react-md/form';
import { useDispatch, useSelector } from 'react-redux';
import { useAddMessage } from '@react-md/alert';
import FormTextField from '../../form/FormTextField';
import { registerValidation } from './validations';
import { clearLoginState } from '../../../state/actions/userActions';

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: '',
};

const Register = ({ onSubmit, setShowRegister }) => (
  <div className="authCard">
    <Text type="headline-4">Register</Text>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={registerValidation}>
      {({ handleSubmit, resetForm, values }) => (
        <RegisterForm
          onSubmit={handleSubmit}
          resetForm={resetForm}
          values={values}
          setShowRegister={setShowRegister}
        />
      )}
    </Formik>
  </div>
);

const RegisterForm = ({ onSubmit, resetForm, values, setShowRegister }) => {
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
        <FormTextField name="username" label="Username" type="text" value={values.username} />
        <FormTextField name="password" label="Password" type="password" value={values.password} />
        <FormTextField
          name="passwordConfirm"
          label="Password confirmation"
          type="password"
          value={values.passwordConfirm}
        />
      </div>
      <div className="authBtnWrap">
        <div style={{ color: 'grey', margin: '5px' }}>
          <small>Already have an account?</small>
          <br />
          <small
            style={{ cursor: 'pointer' }}
            aria-hidden="true"
            onClick={() => setShowRegister(false)}
          >
            Login here!
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
Register.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setShowRegister: PropTypes.func.isRequired,
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  setShowRegister: PropTypes.func.isRequired,
  values: PropTypes.instanceOf(Object).isRequired,
};

export default Register;
