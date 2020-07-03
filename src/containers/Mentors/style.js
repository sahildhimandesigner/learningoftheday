import { colors } from "../../theme";

const MentorsStyle = ({ breakpoints }) => {
  return {
      'mentorAvatar': {
        display: 'flex',
        width: '15%',
        minHeight: 'auto',
        boxSizing: 'border-box',
        borderRadius: '50%',
        backgroundColor: 'white',
        margin: '2%',
        lineHeight: 11,
        justifyContent: 'center',
        textTransform: 'capitalize',
        cursor: 'pointer'
      },
      'wrapper': {
        display: 'flex',
        justifyContent: 'space-evenly'
      }
  }
}

export default MentorsStyle;