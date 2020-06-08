import React, { useState, useEffect } from 'react'
import { Button, Wrapper } from '..'
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
        <Wrapper
            width="30%"  
            background="#FFF" 
            marginTop="50px"
            marginRight="50px" 
            RoundCorner="30px" 
            padding="40px 30px">
            <div className={classes.userContainer}>      
                <img src={UserAvtar} alt={UserAvtar} />
                <div className={classes.userInformation}>
                    <span className={classes.userName}>
                        {`${props.currentState.firstName} 
                        ${props.currentState.lastName}`}
                    </span>
                    <span className={classes.levelInformation}>
                        <Level className={classes.coins} coins={coins}/>
                        <span className={classes.userType}>Mentor</span>
                    </span>
                </div>
                
                <div className={classes.btnContainer}>
                    <Button 
                        width="50%" 
                        onClick={() => props.click('allGoal')}>
                            All Goal
                    </Button>
                    <Button 
                        width="50%" 
                        onClick={() => props.click('addGoal')}>
                            Add Goal
                    </Button>
                </div>                
            </div>
        </Wrapper>
    )
}

export default withStyle(UserStyle)(UserInfo);