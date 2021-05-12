import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Text } from '@react-md/typography';
import { Button } from '@react-md/button';
import { Form } from '@react-md/form';
import { registerValidation } from './validations';
import FormInput from './FormInput';

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

const RegisterForm = ({ onSubmit, resetForm, values, setShowRegister }) => (
  <Form>
    <div className="authInputWrap">
      <FormInput name="username" label="Username" type="text" value={values.username} />
      <FormInput name="password" label="Password" type="password" value={values.password} />
      <FormInput
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
          click here!
        </small>
      </div>
      <div className="authBtnWrap">
        <Button type="reset" onClick={resetForm} themeType="contained" style={{ margin: '2px' }}>
          clear
        </Button>
        <Button type="submit" onClick={onSubmit} themeType="contained" style={{ margin: '2px' }}>
          submit
        </Button>
      </div>
    </div>
  </Form>
);

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
