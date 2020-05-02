const ContainerStyle = ({ colors, fonts }) => {
    return {
        containe : {            
            width: ({ width = '100%'}) => width,                                    
            padding: ({ padding = '10px 20px'}) => padding,
            maxWidth: ({ maxWidth = '1200px' }) => maxWidth,
            margin: ({ margin = '0 auto' }) => margin,
            display: ({ display = 'flex' }) => display,
            flexFlow: ({ flexFlow = 'row' }) => flexFlow,
        }
    }
}

export default ContainerStyle;