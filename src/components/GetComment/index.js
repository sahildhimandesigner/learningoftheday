import React from 'react'

const GetComment = (props) => {
    return(
        <div dangerouslySetInnerHTML={{__html: props.comments}} />
    )
}

export default GetComment;