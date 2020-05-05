import React from 'react'
import { Headings, Wrapper } from '../index';
import LandingPageStyle from './style'
import withStyles from 'react-jss';

const UserComment = (...props) => {    
    
    return (
        <div>
            <Wrapper>
                {props.item.heading}
                <Headings as='h1'>Add Comment</Headings>                
            </Wrapper>
        </div>
    )
}

export default withStyles(LandingPageStyle)(UserComment);