const AddPostStyle = ({ fonts }) => {
  return{
    ModalHeader: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    closeIcon: {
      cursor: 'pointer',
    },
    formGroup: {
      position: 'relative',
      marginBottom: 20,
      '& input': {
        width: '100%',
        padding: 10,
        boxSizing: 'border-box',
        outline: 'none',
      }
    },
    modalBody: {
      margin: '30px 0 0',
      '& textarea': {
        width: '100%',
        resize: 'none',
        outline: 'none',
        padding: 10,
        fontFamily: fonts.primary,
        boxSizing: 'border-box',
      }
    },
    modalFooter: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  };
};

export default AddPostStyle;
