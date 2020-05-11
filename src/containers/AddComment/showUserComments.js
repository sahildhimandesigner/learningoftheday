import React from 'react'
import moment from 'moment';
import { Wrapper, UserCommentsList } from '../../components';
import UserCommentStyle from './style'
import withStyle from 'react-jss'

const ShowUserComments = ({clasess, ...props}) => {
    return (
        <Wrapper>
            {props.getComment.map((item) => {
            const customFormat = moment(item.date).fromNow();
            return(
                <UserCommentsList
                    userName={item.userName}
                    addComment={item.addComment}
                    date={customFormat}
                />
            )
        })}
        </Wrapper>
    )
}

export default withStyle(UserCommentStyle)(ShowUserComments);