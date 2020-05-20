import React from 'react'
import UserCommentStyle from './style'
import withStyle from 'react-jss'
import AvtarIcon from '../../images/user-placeholder.svg'

const UserCommentsList = ({classes, ...props}) => {
    return (
        <div className={classes.commentListContainer}>
           <div className={classes.avtar}>
             <img src={AvtarIcon} alt='Icon'/>
           </div>
           <div className={classes.commentInfoContainer}>
            <h2 className={classes.userName}>{props.userName} 
              <span className={classes.commentDate}>{props.date}</span>
            </h2>
            <p className={classes.userComment}>{props.addComment}</p>
           </div>
        </div>
    )
}

export default withStyle(UserCommentStyle)(UserCommentsList);