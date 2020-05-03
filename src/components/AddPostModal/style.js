const AddPostStyle = ({ colors }) => {
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
    modalBody: {
      margin: '30px 0 0',
      '& textarea': {
        width: '100%',
      }
    },
  };
};

export default AddPostStyle;
