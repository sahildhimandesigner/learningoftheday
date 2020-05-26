import { colors } from "../../theme";

const LearningBlocksStyle = ({ breakpoints }) => {
  return {
    linkColor: {
      color: "#000",
      textDecoration: 'none',
      position:'relative',
      top: '-2px',
      padding: '0 0 0 5px'
    },
    postBox : {
      display: 'flex',
      marginTop: 32,
      position: 'relative',
      '&::after': {
        content: "''",
        background: '#ccc',
        width: 4,
        height: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        margin: '0 auto',
        top: '-31px',
        zIndex: '-1',
        paddingBottom: 121,
        [breakpoints.MOBILE_DEVICE]: {
          display: 'none',
        },
      },
      '&::before': {
        width: 30,
        content: "''",
        height: 30,
        borderRadius: '50%',
        background: colors.primaryColor,
        top: '-48px',
        position: 'absolute',
        left: 0,
        right: 0,
        margin: '0 auto',
        [breakpoints.MOBILE_DEVICE]: {
          display: 'none',
        },
      },
    },
    postBlock : {
      background: colors.white,
      border: '1px solid #e2e2e2',
      borderRadius: '5px',
      cursor: 'pointer',
      padding: '19px',
      width: ({ width = '47%'}) => width,
      transition: 'all 0.3s ease-in-out 0s',
      boxSizing: 'border-box',
      marginBottom: 25,
      '&:hover': {
        boxShadow: '6px 4px 19px 0px #e5e5e5',
      },
      '&:nth-child(even)': {
        position: 'relative',
        top: 40,
        marginBottom: 30,
        [breakpoints.MOBILE_DEVICE]: {
          top: 0,
          marginBottom: 25, 
        },
        '&::before': {
          width: 20,
          content: "''",
          height: 20,
          borderRadius: '50%',
          background: colors.primaryColor,
          top: '-25px',
          position: 'absolute',
          left: '-46px',
          margin: '0 auto',
          zIndex: 10,
          [breakpoints.LARGE_IPAD]: {
            left: '-43px !important',
          },
          [breakpoints.IPAD]: {
            left: '-34px !important',
          },
          [breakpoints.MOBILE_DEVICE]: {
            display: 'none',
          },
        },
        '&::after': {
          width: 10,
          content: "''",
          height: 10,
          borderRadius: '50%',
          background: colors.white,
          top: '-20px',
          position: 'absolute',
          left: '-41px',
          margin: '0 auto',
          zIndex: 99,
          [breakpoints.LARGE_IPAD]: {
            left: '-38px !important',
          },
          [breakpoints.IPAD]: {
            left: '-29px !important',
          },
          [breakpoints.MOBILE_DEVICE]: {
            display: 'none',
          },
        },
      },
      [breakpoints.MOBILE_DEVICE]: {
        width: '100% !important'
      },      
    },
  };
}

export default LearningBlocksStyle;