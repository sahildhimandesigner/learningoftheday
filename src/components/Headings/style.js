const HeadingStyle = ({ colors }) => {
  return{
    h1: {
      fontSize: ({ fontSize = '32px' }) => fontSize,
      color: ({ textColor = colors.black }) => textColor,
      width: ({ width = '100%'}) => width,
    },
  }
}

export default HeadingStyle;