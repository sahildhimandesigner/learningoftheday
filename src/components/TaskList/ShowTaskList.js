import React from 'react'
import moment from 'moment';

const ShowTaskList = (...props) => {
    console.log(props, 'show task list com')
    return (
        <div>
            <h4>{props.task}</h4>
            <h4>{props.startDate}</h4>
            <h4>{props.endDate}</h4>
            <div dangerouslySetInnerHTML={{__html: props.description}} />
        </div>
    )
}

export default ShowTaskList;