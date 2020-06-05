import React from 'react'
import { Headings } from '..'
import UserAvtar from './../../images/user-placeholder.svg'  
import UserStyle from './style'
import withStyle from 'react-jss'

const UserInfo = ({classes, ...props}) => { 
    console.log(props.show, 'user info')
    return (
        <div className={classes.userContainer}>      
            <img src={UserAvtar} alt={UserAvtar} />
            <Headings as="h2">User Information</Headings>
            <button onClick={() => props.click('allGoal')}>All Goal</button>
            <button onClick={() => props.click('addGoal')}>Add Goal</button>
        </div>
    )
}

export default withStyle(UserStyle)(UserInfo);