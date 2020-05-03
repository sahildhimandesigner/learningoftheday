const LearningBlockStyle = ({colors, fonts}) => {
    return {
        div : {
            border: '1px solid',
            borderColor: colors.gray,
            borderRadius: '5px',
            cursor: 'pointer',
            padding: '19px',
            float: 'left',
            width: ({ width = '44%'}) => width,
            margin: ({ spacing = '10px' }) => spacing,
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
            fontSize: fonts.fontSizeMedium,
        }
    };
}

export default LearningBlockStyle;