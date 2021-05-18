import React from 'react';
import { Text } from '@react-md/typography';
import { Formik } from 'formik';
import { Form } from '@react-md/form';
import { Button } from '@react-md/button';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import FormTextField from '../../form/FormTextField';
import FormTextArea from '../../form/FormTextArea';
import FormSelect from '../../form/FormSelect';

const initialValues = { header: '', description: '', category: '' };
const bulletValidation = yup.object({
  header: yup
    .string()
    .max(50, 'Header must be 50 characters or less')
    .min(5, 'Header must be 5 characters or more')
    .required('Header is required'),
  description: yup
    .string()
    .max(250, 'Description must be 250 characters or less')
    .min(20, 'Description must be at least 20 characters')
    .required('Description is required'),
  category: yup.string().required('Please select category'),
});

const NewBulletin = ({ onSubmit }) => {
  return (
    <div className="newBulletinCard">
      <Text type="headline-4" style={{ marginTop: '10px' }}>
        Create new
      </Text>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={bulletValidation}>
        {({ handleSubmit, resetForm, values }) => (
          <BulletForm onSubmit={handleSubmit} resetForm={resetForm} values={values} />
        )}
      </Formik>
    </div>
  );
};

const BulletForm = ({ onSubmit, resetForm, values }) => {
  const handleReset = () => {
    resetForm();
  };
  return (
    <Form>
      <div className="authInputWrap">
        <FormTextField name="header" label="Header" type="text" value={values.header} />
        <FormTextArea
          name="description"
          label="Description"
          type="text"
          resize="vertical"
          rows={3}
          value={values.description}
        />
        <FormSelect name="category" label="Category" options="bulletinOptions" />
      </div>
      <div className="bulletBtnWrap">
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
    </Form>
  );
};

NewBulletin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
BulletForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  values: PropTypes.instanceOf(Object).isRequired,
};
export default NewBulletin;
