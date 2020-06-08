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
        }
    }
}
export default UserStyle;