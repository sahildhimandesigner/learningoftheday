import React from 'react'
import moment from 'moment';
import { Wrapper, UserCommentsList } from '../../components';
import UserCommentStyle from './style'
import withStyle from 'react-jss'

const ShowUserComments = ({clasess, ...props}) => {
    console.log(props, 'props dfdsf')
    return (
        <Wrapper flexFlow="column">
            {props.getComment.map((item, index) => {
            const customFormat = moment(item.date).fromNow();
            return(
                <UserCommentsList key={index}
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