import React from 'react'
import { Headings } from '..'
import UserAvtar from './../../images/user-placeholder.svg'  
import UserStyle from './style'
import withStyle from 'react-jss'

const UserInfo = ({classes}) => { 
    return (
        <div className={classes.userContainer}>      
            <img src={UserAvtar} alt={UserAvtar} />
            <Headings as="h2">User Information</Headings>
        </div>
    )
}

export default withStyle(UserStyle)(UserInfo);