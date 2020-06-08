import React from 'react'
import withStyle from 'react-jss'
import ComponentStyle from './style'

const ShowTaskList = ({ classes, ...props}) => {
    return (
        <div className={classes.container}>
            <h4>{props.task}</h4>
            <h4>{props.startDate}</h4>
            <h4>{props.endDate}</h4>
            <div dangerouslySetInnerHTML={{__html: props.description}} />
        </div>
    )
}

export default withStyle(ComponentStyle)(ShowTaskList);