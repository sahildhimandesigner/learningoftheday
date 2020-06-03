import React from 'react'
import { Footer, Header, Wrapper } from '../../components'
import firebase from '../../firebase'
import SetGoal from '../../components/SetGoal'

const UserProfilePage = (props) => {
    const currentUser = props.currentState.userId;
    console.log(currentUser, 'currentUser')

    const submitGoalHandler = (submitGoalHandler) => {
        const goal = firebase.database().ref(`allGoals/${currentUser}`);
        goal.push({
            goalName:submitGoalHandler.goalName,
            startDate:submitGoalHandler.startDate.toString(),
            endDate:submitGoalHandler.endDate.toString(),
            description:submitGoalHandler.description  
        })
    }

    return (
        <>
            <Header {...props} />
                <Wrapper background="#FFF" marginTop="50px" RoundCorner="30px" padding="40px 30px">
                    <SetGoal submitGoalHandler={submitGoalHandler} />
                </Wrapper>
            <Footer />
        </>
    )
}

export default UserProfilePage;