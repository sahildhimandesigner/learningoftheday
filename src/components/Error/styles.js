const FormStyles = ({ colors, linkText }) => {
  const errorMessage = {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
    paddingLeft: 15,
  };
  return {
    errorMessage: {
      ...errorMessage,
    },
  };
};
    
export default FormStyles;
      