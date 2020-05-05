import React from 'react'
import { Headings, Wrapper } from '../index';
import LandingPageStyle from './style'
import withStyles from 'react-jss';

const UserComment = () => {
    return (
        <div>
            <Wrapper>
                <Headings as='h1'>Add Comment</Headings>
            </Wrapper>
        </div>
    )
}

export default withStyles(LandingPageStyle)(UserComment);