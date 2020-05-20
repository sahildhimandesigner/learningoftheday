import React from 'react';
import withStyles from 'react-jss';
import ScrollAnimation from 'react-animate-on-scroll';
import moment from 'moment';
import { LearningBlock } from '../../components';
import Wrapper from '../../components/Wrapper'
import LearningBlocksStyle from './style';
import './animation.css';
import { Link } from 'react-router-dom'

const LearningBlocks = ({classes, ...props}) => {
  return (    
    <div className={classes.postBox}>
      <Wrapper justifyContent='space-between'>
        {props.postData.map((item, index) => {
          const customFormat = moment(item.date).fromNow();   
          return(
            <ScrollAnimation className={classes.postBlock} animateIn="fadeIn" key={index}>     
                <LearningBlock
                  name={item.name}
                  title={item.heading}
                  content={item.content}
                  date={customFormat}
                />
              <Link className={classes.linkColor} to={`/AddComment/${item.id}`}>Add Comment</Link>
            </ScrollAnimation>
          )
        })}
      </Wrapper>
    </div>
  );
}

export default withStyles(LearningBlocksStyle)(LearningBlocks);
