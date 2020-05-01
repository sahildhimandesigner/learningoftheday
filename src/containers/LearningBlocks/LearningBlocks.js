import React, { Component } from 'react';
import withStyles from 'react-jss';
import LearningBlock from '../../components/LearningBlock/LearningBlock';
import LearningBlocksStyle from './style';

const learningBlocks = ({classes}) => {
    return (
        <div className={classes.div}>
            <LearningBlock 
                title='title'
                date='24'>
                paragraph pragraph
            </LearningBlock>
            <LearningBlock 
                title='title'
                date='24'>
                paragraph pragraph
            </LearningBlock>
            <LearningBlock 
                title='title'
                date='24'>
                paragraph pragraph
            </LearningBlock>
        </div>
    );
}

export default withStyles(LearningBlocksStyle)(learningBlocks);