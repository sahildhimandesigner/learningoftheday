const HeaderStyle = ({ colors }) => {
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
            width: '24%'
        }

    }
}
export default HeaderStyle;