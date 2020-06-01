const LearningBlockStyle = ({colors, fonts}) => {
  return {
    postBoxCol: {
      '& h4': {
        textTransform: 'capitalize',
        color: colors.lightBlack,
        margin: '0 0 4px',
        lineHeight: 'normal',
      },
    },
    userDetailCol: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 24,
    },
    userName: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 10,
      marginTop: 0,
    },
    avtar: {
      width: 60,
      height: 60,
      borderRadius: 50,
      opacity: '0.8',
      '& img': {
        width: '100%',
      }
    },
    user_name: {
      color: colors.black,
      fontSize: fonts.fontSizeLarge,
    },
    post: {
      color: colors.black,
      fontSize: fonts.fontSizeLarge,
    '& img' : {
        width: '100% !important'
      }
    },
    date: {
      color: colors.gray,
      fontSize: 12,
      display: 'flex',
      alignItems: 'center',
      '& span': {
        padding: '0 5px'
      }
    },
  };
}

export default LearningBlockStyle;
