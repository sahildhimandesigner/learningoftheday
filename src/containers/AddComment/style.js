
const UserCommentStyle = ({colors, fonts}) => {
    return {
        postBoxCol: {
          maxWidth: '1120px',
          padding: '20px 20px',
          background: colors.white,
          margin: '20px auto',
          borderRadius: '20px',
            '& h4': {
              textTransform: 'capitalize',
              color: colors.lightBlack,
              margin: '0 0 4px',
              lineHeight: 'normal',
              display: 'block',
            },
          },
          userDetailCol: {
            marginBottom: 24,
          },
          userName: {
            marginLeft: 16,
            marginTop: 2,
            justifyItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            flexFlow: 'column',
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
            display: 'flex',
            alignItems: 'center',
            '& span' : {
              padding: '0 5px'
            }
          },
        }
}

export default UserCommentStyle;