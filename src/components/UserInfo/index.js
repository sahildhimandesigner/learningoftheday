import React, { useState, useEffect } from 'react'
import { Headings } from '..'
import UserAvtar from './../../images/user-placeholder.svg'  
import UserStyle from './style'
import withStyle from 'react-jss'
import firebase from '../../firebase';
import Level from '../../utilities/CoinsLevelMapper';

const UserInfo = ({classes, ...props}) => {
    const [coins, setCoins] = useState(0);

    useEffect(() => {
        const userInfo = firebase.database().ref(`users/${props.currentState.userId}`);
        userInfo.on('value', function(snapshot){
            setCoins(snapshot.val().coins ?? 0);
        });
    }, []);
    return (
        <div className={classes.userContainer}>      
            <img src={UserAvtar} alt={UserAvtar} />
            <div className={classes.userInformation}>
                <span>
                    {`${props.currentState.firstName} ${props.currentState.lastName}`}
                </span>
                <span className={classes.levelInformation}><Level coins={coins}/></span>
            </div>
            
            <button onClick={() => props.click('allGoal')}>All Goal</button>
            <button onClick={() => props.click('addGoal')}>Add Goal</button>
        </div>
    )
}

export default withStyle(UserStyle)(UserInfo);