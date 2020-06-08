import React from 'react'
import withStyle from 'react-jss'
import ComponentStyle from './style'

const ShowTaskList = ({ classes, ...props}) => {
    return (
        <div className={classes.container}>
            <h4 className={classes.taskName}>{props.task}</h4>
            <div className={classes.timeContainer}>
                <h4 className={classes.startDate}>Start Date: <span>{props.startDate}</span></h4>
                <h4 className={classes.endDate}>End Date: <span>{props.endDate}</span></h4>
            </div>
            <div className={classes.description}>
                <h5>Description:</h5>
                <div dangerouslySetInnerHTML={{__html: props.description}} />
            </div>
        </div>
    )
}

export default withStyle(ComponentStyle)(ShowTaskList);