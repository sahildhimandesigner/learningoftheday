import React from 'react';
import withStyles from 'react-jss';
import ScrollAnimation from 'react-animate-on-scroll';
import { LearningBlock } from '../../components';
import Wrapper from '../../components/Wrapper'
import LearningBlocksStyle from './style';
import { Link } from "react-router-dom";
import './animation.css';

const LearningBlocks = ({classes, ...props}) => {
  return (    
    <div className={classes.postBox}>
      <Wrapper justifyContent='space-between'>
        {props.postData.map((item, index) => {          
          return(
            <ScrollAnimation className={classes.postBlock} animateIn="fadeIn" key={index}>
              <LearningBlock
                title={item.heading}
                content={item.content}
                date={item.date}
              />
              <Link className={classes.linkColor} to='/UserComment'>Add Comment</Link>
            </ScrollAnimation>
          )
        })}
      </Wrapper>
    </div>
  );
}

export default withStyles(LearningBlocksStyle)(LearningBlocks);
