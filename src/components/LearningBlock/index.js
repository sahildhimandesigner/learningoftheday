import React from 'react';
import withStyles from 'react-jss';
import { Headings } from '../index';
import LearningBlockStyle from './style';

const LearningBlock = ({classes, ...props}) => (
    <div className={classes.div}>
        <Headings as='h3'>{props.title}</Headings>
        <Headings className={classes.post} margin='16px 0 20px'>{props.content}</Headings>
        <span className={classes.date}>{props.date}</span>
    </div>
);

export default withStyles(LearningBlockStyle)(LearningBlock);
