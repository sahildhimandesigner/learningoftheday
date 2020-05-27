import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  addComment: Yup.string()
    .required('Please enter comments'),
})

export default {
  validationSchema
};