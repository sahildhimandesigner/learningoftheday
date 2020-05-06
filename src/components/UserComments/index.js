import React from 'react'
import { Headings, Wrapper } from '../index';
import LandingPageStyle from './style'
import withStyles from 'react-jss';

const UserComment = (...props) => {
    console.log(props);
    const getPage = props[0].history.location;
    return (
        <div>
            <Wrapper>
                {getPage.pathname}
                <Headings as='h1'>Add Comment</Headings>                
            </Wrapper>
        </div>
    )
}

export default withStyles(LandingPageStyle)(UserComment);