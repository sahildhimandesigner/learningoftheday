import React from 'react';
import withStyles from 'react-jss';
import { postData } from '../../config/constant';
import { LearningBlock } from '../../components';
import Wrapper from '../../components/Wrapper'
import LearningBlocksStyle from './style';

const learningBlocks = ({classes}) => {
  return (
    <div className={classes.postBox}>
      <Wrapper justifyContent='space-between'>
        {postData.map((item, index) => {
          return(
            <LearningBlock
              key={index}
              title={item.heading}
              children={item.content}
              date={item.date}
            />
          )
        })}
      </Wrapper>
    </div>
  );
}

export default withStyles(LearningBlocksStyle)(learningBlocks);