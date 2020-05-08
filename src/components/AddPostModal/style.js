const AddPostStyle = ({ colors, fonts }) => {
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
        minHeight: 46,
        borderRadius: 30,
        border: `1px solid ${colors.lightGray}`,
        paddingLeft: 20,
        fontSize: 14,
      },
    },
    modalBody: {
      margin: '30px 0 0',
      '& textarea': {
        width: '100%',
        resize: 'none',
        outline: 'none',
        padding: '15px 10px 10px 24px',
        fontFamily: fonts.primary,
        boxSizing: 'border-box',
        border: `1px solid ${colors.lightGray}`,
        fontSize: 14,
        borderRadius: 24, 
      }
    },
    modalFooter: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  };
};

export default AddPostStyle;
