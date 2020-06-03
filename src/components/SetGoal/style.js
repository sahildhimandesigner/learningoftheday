const SetGoalStyle = ({ colors, fonts }) => {
    return {
        Landingpage : {
            color: ({color = colors.primaryColor }) => color
        },
        avtar: {
            width: 40,
            height: 40,
            borderRadius: 50,
            opacity: '0.8',
            '& img': {
              width: '100%',
            }
          },
          commentListContainer: {
            display: 'flex',
            width:'100%',
            margin: '15px 0 15px 10px',
          },
          commentInfoContainer: {
            padding: '0',
            border: '#ddd solid 1px',
            margin: '0 0 0 10px',
            borderRadius: '5px',
            boxShadow: '0 1px 1px rgba(0,0,0,.05)',
            width: '80%',
            backgroundColor:'#FFF'
          },
          userName: {
              margin: '0',
              fontSize: '14px',
              color: '#333',
              backgroundColor: '#f5f5f5',
              borderColor: '#ddd',
              padding: '10px 15px',
              position: 'relative',
              '&::after' : {
                position: 'absolute',
                top: '11px',
                left: '-16px',
                right: '100%',
                width: '0',
                height: '0',
                display: 'block',
                content: " ",
                borderColor: 'transparent',
                borderStyle: 'solid solid outset',
                pointerEvents: 'none',
              }
          },
          userComment: {
              fontSize: '12px',
              colors: '#A7A9AD',
              padding: '15px'
          },
          commentDate: {
              color: '#777',
              fontSize: '11px',
              padding: '0 0 0 5px',
              fontWeight: 'normal'
          },
          formGroup: {
            position: 'relative',
            marginBottom: 20,
            '& input': {
              width: '100%',
              padding: 10,
              boxSizing: 'border-box',
              outline: 'none',
              minHeight: 46,
              borderRadius: 30,
              border: `1px solid ${colors.lightGray}`,
              paddingLeft: 20,
              fontSize: 14,
            },
            '& textarea': {
                width: '100%',
                resize: 'none',
                outline: 'none',
                padding: '15px 10px 10px 24px',
                fontFamily: fonts.primary,
                boxSizing: 'border-box',
                border: `1px solid ${colors.lightGray}`,
                fontSize: 14,
                borderRadius: 24, 
              }
          },
          postComment: {
              backgroundColor: `${colors.primaryColor}`
          },
          commentContainer: {
            backgroundColor: colors.white,
            padding: '20px',
            borderRadius: '30px',
          }
          
    }
}

export default SetGoalStyle;