import React, { useState, useEffect } from 'react'
import { Footer, Header, Wrapper } from '../../components'
import firebase from '../../firebase'
import SetGoal from '../../components/SetGoal'
import UserInfo from '../../components/UserInfo'
import TaskList from '../../components/TaskList'

const UserProfile = (props) => {
    const [display, setDisplay] = useState(true);
    const [getTask, setTask] = useState([])
    const currentUser = props.currentState.userId;    

    const profileRender = () => {
        setDisplay(false)
    }

    const submitGoalHandler = (submitGoalHandler) => {
        const goal = firebase.database().ref(`allGoals/${currentUser}`);
        goal.push({
            goalName:submitGoalHandler.goalName,
            startDate:submitGoalHandler.startDate.toString(),
            endDate:submitGoalHandler.endDate.toString(),
            description:submitGoalHandler.description  
        })
    }

    const getTaskHandler = () => {
        const getTaskList = firebase.database().ref(`allGoals/${currentUser}`);
        
        getTaskList.on('value', function(snapshot){
            const getAllTask = [];
            for(const key in snapshot.val()){
                getAllTask.push({
                    id: key,
                    goalName: snapshot.val()[key].goalName,
                    startDate: snapshot.val()[key].startDate,
                    endDate: snapshot.val()[key].endDate,
                    description: snapshot.val()[key].description,
                })
                setTask(getAllTask);
            }
        })
    }

    useEffect(()=> {
        getTaskHandler();
    }, [])
    
    console.log(getTask, 'user profile com')
    return (
        <>
            <Header {...props} />
                <Wrapper  
                    background="#FFF" 
                    marginTop="50px" 
                    RoundCorner="30px" 
                    padding="40px 30px">
{/* 
                    <UserInfo {...props} 
                        click={profileRender}  
                        /> */}
                    <TaskList 
                        getAllTask={getTask} 
                        />
                 <SetGoal 
                    submitGoalHandler={submitGoalHandler} 
                    />
                </Wrapper>
            <Footer />
        </>
    )
}

export default UserProfile;