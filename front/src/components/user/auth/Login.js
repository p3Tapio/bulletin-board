import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Text } from '@react-md/typography';
import { Button } from '@react-md/button';
import { Form } from '@react-md/form';
import { loginValidation } from './validations';
import FormInput from './FormInput';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const Login = () => {
  const onSubmit = (values, { resetForm }) => {
    // eslint-disable-next-line no-console
    console.log('values -----------', values);
    resetForm();
  };
  return (
    <div>
      <Text type="headline-4">Login</Text>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginValidation}>
        {({ handleSubmit, resetForm, values }) => (
          <LoginForm onSubmit={handleSubmit} resetForm={resetForm} values={values} />
        )}
      </Formik>
    </div>
  );
};

const LoginForm = ({ onSubmit, resetForm, values }) => (
  <Form>
    <FormInput name="username" label="Username" type="text" value={values.username} />
    <FormInput name="password" label="Password" type="password" value={values.password} />
    <FormInput
      name="passwordConfirmation"
      label="Password confirmation"
      type="password"
      value={values.passwordConfirmation}
    />
    <Button type="submit" onClick={onSubmit} themeType="contained">
      submit
    </Button>
    <Button type="reset" onClick={resetForm} themeType="contained" style={{ marginLeft: '5px' }}>
      clear
    </Button>
  </Form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  values: PropTypes.instanceOf(Object).isRequired,
};

export default Login;
