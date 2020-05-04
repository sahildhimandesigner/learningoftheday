import React, { useState, useEffect } from 'react';
import axios from '../../axios-instance';
import withStyles from 'react-jss';
import ScrollAnimation from 'react-animate-on-scroll';
import { postData } from '../../config/constant';
import { LearningBlock } from '../../components';
import Wrapper from '../../components/Wrapper'
import LearningBlocksStyle from './style';
import './animation.css';

const LearningBlocks = ({classes}) => {
  useEffect(() => {
    console.log(axios.get('learningPosts.json'));
  });
  return (
    <div className={classes.postBox}>
      <Wrapper justifyContent='space-between'>
        {postData.map((item, index) => {
          return(
            <ScrollAnimation className={classes.postBlock} animateIn="fadeIn" key={index}>
              <LearningBlock
                title={item.heading}
                children={item.content}
                date={item.date}
              />
            </ScrollAnimation>
          )
        })}
      </Wrapper>
    </div>
  );
}

export default withStyles(LearningBlocksStyle)(LearningBlocks);
