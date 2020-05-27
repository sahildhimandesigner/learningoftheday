import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  addTitle: Yup.string()
    .required('Please enter title'),
  addPost: Yup.string()
    .required('Add post field is required'),
})

export default {
  validationSchema
};