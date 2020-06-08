import React from "react";
import moment from 'moment';
import ShowTaskList from './ShowTaskList'
import withStyle from 'react-jss'
import ComponentStyle from './style'
import { Wrapper } from '..'

const TaskList = ({classes, ...props}) => {
    return(
        <Wrapper  
                    background="#FFF" 
                    marginTop="50px" 
                    RoundCorner="30px" 
                    padding="40px 30px">
            <h2>Task List</h2>
            {props.getAllTask.map((item, index) => {
                const startDate = moment(item.startDate).format('YYYY-MM-DD');
                const endDate = moment(item.endDate).format('YYYY-MM-DD');
                return(<ShowTaskList key={index} 
                    task={item.goalName}
                    startDate={startDate}
                    endDate={endDate}
                    description={item.description}
                    />)
            })}
        </Wrapper>
    )
}

export default withStyle(ComponentStyle)(TaskList);