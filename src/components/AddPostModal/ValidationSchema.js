import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  addName: Yup.string()
    .required('Please enter your name'),
  addTitle: Yup.string()
    .required('Please enter title'),
  addPost: Yup.string()
    .required('Add post field is required'),
})

export default {
  validationSchema
};