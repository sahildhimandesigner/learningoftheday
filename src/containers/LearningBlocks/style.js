const LearningBlocksStyle = ({ colors }) => {
  return {
    postBox : {
      display: 'flex',
      marginTop: 32,
    },
    postBlock : {
      border: '1px solid #e2e2e2',
      borderRadius: '5px',
      cursor: 'pointer',
      padding: '19px',
      width: ({ width = '49%'}) => width,
      transition: 'all 0.3s ease-in-out 0s',
      boxSizing: 'border-box',
      marginBottom: 25,
      '&:hover': {
          boxShadow: '1px 5px 10px #ccc',
      }
    },
  };
}

export default LearningBlocksStyle;