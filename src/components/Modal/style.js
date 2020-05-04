const modalStyle = ({ colors, breakpoints }) => {
    return {
      modal: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        zIndex: 1,
        padding: ({ padding = '10px 0 0' }) => padding,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        background: 'rgba(0,0,0,0.8)',
      },
      modalContent: {
        backgroundColor: colors.lightWhite,
        margin: 'auto',
        maxWidth: ({ maxWidth = '520px' }) => maxWidth,
        display: 'flex',
        width: '100%',
        padding: 20,
        borderRadius: 4,
        flexDirection: 'column',
        [breakpoints.MOBILE_DEVICE]: {
          maxWidth: '95% !important',
          boxSizing: 'border-box',
        },
      },
    };
  };
      
  export default modalStyle;
        