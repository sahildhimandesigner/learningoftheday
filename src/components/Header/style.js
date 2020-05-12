const HeaderStyle = ({ colors, breakpoints }) => {
    return {
        bg: {
            backgroundColor: ({ backgroundColor = colors.primaryColor}) => backgroundColor,
            minHeight: ({ minHeight = '80px'}) => minHeight,
            textAlign: ({ textAlign = 'center'}) => textAlign,
            display: ({ display = 'flex' }) => display,
            flexFlow: ({ flexFlow = 'row' }) => flexFlow,
            width: ({ width = '100%'}) => width,
        },
        navItems: {
            display: 'inherit',
            justifyContent: 'space-between',
            width: '24%',
            [breakpoints.MOBILE_DEVICE]: {
              width: '100%',
            },
            [breakpoints.IPAD]: {
              width: '100%',
            },
        }

    }
}
export default HeaderStyle;