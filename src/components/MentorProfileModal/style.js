const modalStyle = ({ colors, breakpoints }) => {
    return {
      ModalHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '25px',
        alignItems: 'center'
      },
      closeIcon: {
        cursor: 'pointer',
      },
      capitalizeName: {
        textTransform: 'capitalize'
      },
      wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 'auto'
      },
      content: {
        flexDirection: 'column',
        display: 'flex',
        alignSelf: 'center',
        width: '63%'
      },
      span: {
        height: 'auto',
        paddingBottom: '20px'
      }
    };
  };
      
  export default modalStyle;
        