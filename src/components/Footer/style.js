const HeaderStyle = ({ colors, breakpoints }) => {
  return {
    footer : {
      backgroundColor: ({ backgroundColor = colors.footerColor}) => backgroundColor,
      minHeight: ({ minHeight = '80px'}) => minHeight,
      textAlign: ({ textAlign = 'center'}) => textAlign,
      display: ({ display = 'flex' }) => display,
      flexFlow: ({ flexFlow = 'row' }) => flexFlow,
      width: ({ width = '100%'}) => width,
      marginTop: 90,
      [breakpoints.MOBILE_DEVICE]: {
        marginTop: 20,
      },
    },
  }
}

export default HeaderStyle;
