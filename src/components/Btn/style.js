const HeaderStyle = ({ colors }) => {
    return {
        bg : {
            backgroundColor: ({ backgroundColor = colors.lightYellow}) => backgroundColor,
            minHeight: ({ minHeight = '80px'}) => minHeight,
            textAlign: ({ textAlign = 'center'}) => textAlign,
            display: ({ display = 'flex' }) => display,
            flexFlow: ({ flexFlow = 'row' }) => flexFlow,
            width: ({ width = '100%'}) => width,
        },

    }
}
export default HeaderStyle;