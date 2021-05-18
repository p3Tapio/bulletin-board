/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import { NativeSelect } from '@react-md/form';
import PropTypes from 'prop-types';

const bulletinOptions = [
  { value: '', key: '' },
  { value: 'Cat_1', key: 'Category 1' },
  { value: 'Cat_2', key: 'Category 2' },
  { value: 'Cat_3', key: 'Category 3' },
  { value: 'Cat_4', key: 'Category 4' },
];

const FormSelect = ({ label, name, options, ...props }) => {
  const [selectOptions, setSelectOptions] = useState();

  useEffect(() => {
    if (options === 'bulletinOptions') setSelectOptions(bulletinOptions);
  }, [options]);

  const [field, meta] = useField(name);
  const showError = meta.touched && meta.error;

  const errorStyle = { marginBottom: 20, alignSelf: 'flex-start' };
  const okStyle = { marginBottom: 41 };
  const errorText = { color: 'red' };

  if (!selectOptions) return null;
  return (
    <>
      <NativeSelect
        className="authFormInput"
        theme="underline"
        label={label}
        id={name}
        name={name}
        icon={null}
        {...field}
        {...props}
      >
        {label && <option key="label" value="" disabled hidden />}
        {selectOptions.map((x) => (
          <option value={x.value} key={x.value}>
            {x.key}
          </option>
        ))}
      </NativeSelect>
      <div className="errorMessage" style={showError ? errorStyle : okStyle}>
        <small style={errorText}>{showError ? meta.error : null}</small>
      </div>
    </>
  );
};
FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
};

export default FormSelect;

// {selectOptions.map((x, i) =>
//   i !== 0 ? (
//     <option value={x.value} key={x.value}>
//       {x.option}
//     </option>
//   ) : (
//     <option value={x.value} key={x.value} disabled="disabled">
//       Choose category
//     </option>
//   )
// )}
