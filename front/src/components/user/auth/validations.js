import * as yup from 'yup';

const registerValidation = yup.object({
  username: yup
    .string()
    .max(20, 'Username must be 20 characters or less')
    .min(4, 'Username must be 4 characters or more')
    .required('Username is required'),
  password: yup
    .string()
    .max(15, 'Password must be 15 characters or less')
    .min(5, 'Password must be at least 5 characters')
    .required('Password is required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is required'),
});
const loginValidation = yup.object({
  username: yup
    .string()
    .max(20, 'Username must be 20 characters or less')
    .min(4, 'Username must be 4 characters or more')
    .required('Username is required'),
  password: yup
    .string()
    .max(15, 'Password must be 15 characters or less')
    .min(5, 'Password must be at least 5 characters')
    .required('Password is required'),
});
export { loginValidation, registerValidation };
