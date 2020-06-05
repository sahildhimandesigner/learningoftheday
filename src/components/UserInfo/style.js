const UserStyle = () => {
    return {
        userContainer: {
            display:'flex',
            flexFlow:'column',
            width: '40%',
            textAlign: 'center'
        },
        userInformation: {
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '50%',
            paddingLeft: '32%',
            paddingTop: '4%',
            paddingBottom: '4%',
            textTransform: 'capitalize'
        },
        levelInformation: {
            fontSize: 12,
            paddingTop: 4,
            color: 'gray'
        }
    }
}
export default UserStyle;