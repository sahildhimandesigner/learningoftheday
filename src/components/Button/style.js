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
            padding: ({ padding = '10px 20px'}) => padding,
            margin: ({ spacing = '10px 15px' }) => spacing,
        }
    }
}

export default buttonStyle;