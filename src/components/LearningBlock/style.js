const LearningBlockStyle = ({colors, fonts}) => {
  return {
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
    }
  };
}

export default LearningBlockStyle;
