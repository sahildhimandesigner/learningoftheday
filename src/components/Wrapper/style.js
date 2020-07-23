const WrapperStyle = ({ colors }) => {
  return {
    container : {
      background: ({ background = ''}) => background,
      width: ({ width = '100%'}) => width,
      padding: ({ padding = '10px 20px'}) => padding,
      maxWidth: ({ maxWidth = '1200px' }) => maxWidth,
      margin: ({ margin = '0 auto' }) => margin,
      marginTop: ({ marginTop = '' }) => marginTop,
      marginLeft: ({ marginLeft = '' }) => marginLeft,
      marginRight: ({ marginRight = '' }) => marginRight,
      display: ({ display = 'flex' }) => display,
      flexFlow: ({ flexFlow = '' }) => flexFlow,
      boxSizing: ({ boxSizing = 'border-box;' }) => boxSizing,
      flexWrap: ({ flexWrap = 'wrap'}) => flexWrap,
      flexGrow: ({ flexGrow = ''}) => flexGrow,
      justifyContent: ({ justifyContent = 'normal'}) => justifyContent,
      alignItems: ({ alignItems = 'normal'}) => alignItems,
      borderRadius: ({ RoundCorner = ''}) => RoundCorner
    }
  }
}

export default WrapperStyle;