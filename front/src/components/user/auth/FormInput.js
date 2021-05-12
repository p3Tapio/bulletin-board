/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useField } from 'formik';
import { TextField } from '@react-md/form';
import PropTypes from 'prop-types';

const FormInput = ({ label, name, type, ...props }) => {
  const [field, meta] = useField(name);
  const showError = meta.touched && meta.error;

  const errorStyle = { marginBottom: 20, alignSelf: 'flex-start' };
  const okStyle = { marginBottom: 41 };
  const errorText = { color: 'red' };

  return (
    <>
      <TextField
        className="authFormInput"
        theme="underline"
        id={name}
        label={label}
        name={name}
        type={type}
        {...field}
        {...props}
      />
      <div className="errorMessage" style={showError ? errorStyle : okStyle}>
        <small style={errorText}>{showError ? meta.error : null}</small>
      </div>
    </>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormInput;
