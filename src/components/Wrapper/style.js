const WrapperStyle = () => {
    return {
        container : {            
            width: ({ width = '100%'}) => width,                                    
            padding: ({ padding = '10px 20px'}) => padding,
            maxWidth: ({ maxWidth = '1200px' }) => maxWidth,
            margin: ({ margin = '0 auto' }) => margin,
            display: ({ display = 'flex' }) => display,
            flexFlow: ({ flexFlow = 'row' }) => flexFlow,
            boxSizing: ({ boxSizing = 'border-box;' }) => boxSizing,
            flexWrap: ({ flexWrap = 'wrap'}) => flexWrap,
            flexGrow: ({ flexGrow = '3'}) => flexGrow,
            justifyContent: ({ justifyContent = 'normal'}) => justifyContent,
        }
    }
}

export default WrapperStyle;