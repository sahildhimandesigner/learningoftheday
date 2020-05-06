const FormStyles = ({ colors, linkText }) => {
  const errorMessage = {
    fontSize: 12,
    color: 'red',
    marginTop: 3,
  };
  return {
    errorMessage: {
      ...errorMessage,
    },
  };
};
    
export default FormStyles;
      