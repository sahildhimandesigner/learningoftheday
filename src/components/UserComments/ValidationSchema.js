import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .required('Please enter your name'),
  addComment: Yup.string()
    .required('Please enter comments'),
})

export default {
  validationSchema
};