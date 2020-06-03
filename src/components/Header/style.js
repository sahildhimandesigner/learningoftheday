const HeaderStyle = ({ colors, breakpoints }) => {
    return {
        bg: {
            backgroundColor: ({ backgroundColor = colors.primaryColor}) => backgroundColor,
            minHeight: ({ minHeight = '80px'}) => minHeight,
            textAlign: ({ textAlign = 'center'}) => textAlign,
            display: ({ display = 'flex' }) => display,
            flexFlow: ({ flexFlow = 'column' }) => flexFlow,
            width: ({ width = '100%'}) => width,
        },
        navItems: {
            display: 'inherit',
            justifyContent: 'flex-end',
            margin: '10px 0 0 0',
            [breakpoints.MOBILE_DEVICE]: {
              width: '100%',
            },
            [breakpoints.IPAD]: {
              width: '100%',
            },
        },
        logo:{
          color: colors.white,
          textDecoration: 'none'
        },
        whiteBar: {
          backgroundColor: colors.white,
          minHeight: '55px',
          width: '100%',         
        },
        innerContainer: {
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex', 
          justifyContent: 'space-between',
          padding: '20px 0',
          boxSizing: 'border-box',          
        },
        whiteNavLink: {
          color: colors.primaryColor,
          textDecoration: 'none',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        whiteNav: {
          display:'flex'
        }
    }
}
export default HeaderStyle;