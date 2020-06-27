import React from 'react';
import withStyles from 'react-jss';
import { Footer, Header } from '../../components';
import MentorsStyle from './style';

const Mentors = ({classes, ...props}) => {
    return (
        <div>
            <Header {...props}/>
            <div className={classes.mentorAvatar}></div>
        </div>
    );
};

export default withStyles(MentorsStyle)(Mentors);