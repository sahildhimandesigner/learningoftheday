const HeadingStyle = ({ colors }) => {
  return{
    h1: {
      fontSize: ({ fontSize = '32px' }) => fontSize,
      color: ({ textColor = colors.black }) => textColor,
    },
    h3: {
      fontSize: ({ fontSize = '22px' }) => fontSize,
      margin: ({ margin = '0' }) => margin,
      fontWeight: '500',
      lineHeight: '26px',
      color: colors.lightBlack,
    },
    p: {
      color: ({ textColor = colors.darkgray }) => textColor,
      fontSize: ({ fontSize = '14px' }) => fontSize,
      fontWeight: 'normal',
      lineHeight: ({ lineHeight = '20px' }) => lineHeight,
      margin: ({ margin = '0' }) => margin,
    }
  }
}

export default HeadingStyle;