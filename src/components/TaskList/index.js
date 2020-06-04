import React from "react";
import moment from 'moment';


const TaskList = (props) => {
    console.log(props.getAllTask, 'task list com')
    return(
        <div> 
            <h2>Task List</h2>
            {props.getAllTask.map((item, index) => {
                const startDate = moment(item.startDate).format('YYYY-MM-DD');
                const endDate = moment(item.endDate).format('YYYY-MM-DD');
                return(<div key={index}>
                    <h1>{item.goalName}</h1>
                    <h1>{startDate}</h1>
                    <h1>{endDate}</h1>
                    <div dangerouslySetInnerHTML={{__html: props.description}} />
                </div>)
            })}
        </div>
    )
}

export default TaskList;