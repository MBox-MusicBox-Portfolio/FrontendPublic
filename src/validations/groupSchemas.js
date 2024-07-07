import * as Yup from 'yup';

export const createGroupValidationSchema = Yup.object({
  name: Yup.string().min(2).max(255).required('Name is required'),
  description: Yup.string().min(2).max(1024).required('Description is required'),
});
