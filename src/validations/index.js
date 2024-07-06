import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email().required('Email is required'),
  birthday: Yup.string().required('Birthday is required'),
  password: Yup.string().required('Password is required'),
  retypePassword: Yup.string().required('Retype password is requires'),
});

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default {
  signInValidationSchema,
  signUpValidationSchema,
};
