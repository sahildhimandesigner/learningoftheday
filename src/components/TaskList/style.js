const ComponentStyle = () => {
    return {
        container: {
            display: 'flex',
            flexFlow: 'column',
            width: '100%',
            backgroundColor: '#FFF',
            borderRadius: '15px',
            marginBottom: '20px',
            padding: '20px'
        },
        timeContainer: {
            display: 'flex',
        },
        startDate: {
            margin:'0',
            width: '50%',
            fontSize: '16px',
            '& span' : {
                fontSize: '14px',
                fontWeight: 'normal'
            }
        },
        endDate: {
            margin: '0',
            width: '50%',
            fontSize: '16px',
            '& span' : {
                fontSize: '14px',
                fontWeight: 'normal'
            }
        },
        taskName: {
            margin: '0',
            padding: '0 0 10px 0',
            fontSize: '18px'
        },
        description: {
            '& h5' : {
                margin: '15px 0 0 0',
                fontSize: '16px'
            }
        }
    }
}

export default ComponentStyle;