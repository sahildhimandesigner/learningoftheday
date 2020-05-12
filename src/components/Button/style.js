const buttonStyle = ({ colors, fonts }) => {
    return {
        btnStyle : {
            backgroundColor: ({ backgroundColor = colors.gray}) => backgroundColor,
            fontSize: ({ fontSize = fonts.fontSizeSmall }) => fontSize,
            color: ({ color = colors.white }) => color,
            width: ({ width = '100%'}) => width,
            textAlign: ({ textAlign = 'center'}) => textAlign,            
            minWidth: ({ minWidth = '120px'}) => minWidth,
            border: ({ border = '0' }) => border,
            padding: ({ padding = '14px 35px'}) => padding,
            margin: ({ spacing = '10px 15px' }) => spacing,
            maxWidth: ({ maxWidth = '180px'}) => maxWidth,
            fontWeight: '600',
            textTransform: 'uppercase',
            cursor: 'pointer',
            borderRadius: 4,
            outline: 'none'
        }
    }
}

export default buttonStyle;