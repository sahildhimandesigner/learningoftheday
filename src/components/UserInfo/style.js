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
            width: 'auto',
            paddingLeft: '23%',
            paddingTop: '4%',
            paddingBottom: '4%',
            textTransform: 'capitalize',
            paddingRight: '8%'
        },
        levelInformation: {
            fontSize: 12,
            paddingTop: 4,
            color: 'gray'
        }
    }
}
export default UserStyle;