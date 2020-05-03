import React from 'react';
import withStyles from 'react-jss';
import LearningBlock from '../../components/LearningBlock/LearningBlock';
import LearningBlocksStyle from './style';
import Wrapper from '../../components/Wrapper'

const learningBlocks = ({classes}) => {
    return (
        <div className={classes.div}>
            <Wrapper>
                <LearningBlock 
                    title='Is there a virtual Crystal'
                    date='3:05 AM - Mar 24, 2020'>
                    Is there a virtual Crystal Maze game where you can create a team with your friends online and then do the challenges and earn crystals? If not, can someone invent it ASAP please.
                </LearningBlock>
                <LearningBlock 
                    title='Can someone invent an Instacart'
                    date='3:05 AM - Mar 24, 2020'>
                    Can someone invent an Instacart but the website looks like a grocery store that you can virtually walk through? How are you all ordering groceries online without getting overwhelmed?
                </LearningBlock>
                <LearningBlock 
                    title='Someone invent a social media'
                    date='3:05 AM - Mar 24, 2020'>
                    Someone invent a social media app that doesn’t allow any political posts. None. Zero.
                </LearningBlock>
                <LearningBlock 
                    title='Someone invent a social media'
                    date='3:05 AM - Mar 24, 2020'>
                    Someone invent a social media app that doesn’t allow any political posts. None. Zero.
                </LearningBlock>
            </Wrapper>
        </div>
    );
}

export default withStyles(LearningBlocksStyle)(learningBlocks);