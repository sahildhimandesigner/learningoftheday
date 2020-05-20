
const UserCommentStyle = ({colors, fonts}) => {
    return {
        postBoxCol: {
            '& h4': {
              textTransform: 'capitalize',
              color: colors.lightBlack,
              margin: '0 0 4px',
              lineHeight: 'normal',
            },
          },
          userDetailCol: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 24,
          },
          userName: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 16,
            marginTop: 2,
          },
          avtar: {
            width: 60,
            height: 60,
            borderRadius: 50,
            opacity: '0.8',
            '& img': {
              width: '100%',
            }
          },
          user_name: {
            color: colors.black,
            fontSize: fonts.fontSizeLarge,
          },
          post: {
            color: colors.black,
            fontSize: fonts.fontSizeLarge,
          },
          date: {
            color: colors.gray,
            fontSize: 12,
          },
        }
}

export default UserCommentStyle;