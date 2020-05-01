const HeadingStyle = ({ colors }) => {
  return{
    h1: {
      fontSize: ({ fontSize = '32px' }) => fontSize,
      color: colors.black,
    },
  }
}

export default HeadingStyle;