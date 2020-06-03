import React, { useState } from 'react'
import { Footer, Header } from '../../components'
import firebase from '../../firebase'
import SetGoal from '../../components/SetGoal'

const UserProfilePage = (props) => {
    const [goal, setGoal] = useState([]);
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
                <SetGoal submitGoalHandler={submitGoalHandler} />
            <Footer />
        </>
    )
}

export default UserProfilePage;