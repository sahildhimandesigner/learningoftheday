const UserStyle = () => {
    return {
        userContainer: {
            display:'flex',
            flexFlow:'column',
            width: '100%',
            textAlign: 'center',
            paddingRight: '25px'
        },
        userInformation: {
            display: 'flex',
            justifyContent: 'space-evenly',
            width: 'auto',
            paddingTop: '4%',
            paddingBottom: '4%',
            textTransform: 'capitalize',
            flexFlow: 'column'
        },
        levelInformation: {
            fontSize: 12,
            paddingTop: 4,
            color: 'gray'
        },
        btnContainer: {
            display: 'flex'
        },
        userType: {
            fontSize: '16px',
            margin: '10px 0',
            display:'flex',
            width: '100%',
            justifyContent: 'center'
        },
        userName: {
            fontSize: '18px',
            fontWeight: 'bold',
            padding: '20px 0 0 0',
            display: 'flex',
            width: '100%',
            justifyContent: 'center'
        }
    }
}
export default UserStyle;