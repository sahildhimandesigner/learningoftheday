import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    goalName: Yup.string()
    .required('Please enter the goal name'),
    startDate: Yup.string()
    .required('Please select Start date'),
    endDate: Yup.string()
    .required('Please select the end date'),
    description: Yup.string()
    .required('Enter the description'),    
})

export default {
  validationSchema
};