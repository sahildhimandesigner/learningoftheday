import React from 'react';
import withStyles from 'react-jss';
import LearningBlockStyle from './style';

const styles = {
  'color': 'red'  
};
const learningBlock = ({classes, children, ...props}) => (
    <div className={classes.div}>
        <h2 className={classes.user_name}>{props.title}</h2>
        <p className={classes.post}>{children}</p>
        <span className={classes.date}>{props.date}</span>
    </div>
);

export default withStyles(LearningBlockStyle)(learningBlock);