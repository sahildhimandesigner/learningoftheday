import React, { useState, useEffect } from 'react'
import { UserComment, Header } from '../../components'
import axios from '../../axios-instance'
import ShowUserComments from './showUserComments'

const AddComment = () => {

    const [getComment, setComment] = useState([])

    const getUserComments = () => {
        axios.get('/userComment.json')
        .then(response => {
            const getCommentData = [];

            for(const key in response.data) {
                getCommentData.push({
                    id: key,
                    userName: response.data[key].userName,
                    addComment: response.data[key].addComment,
                    date: new Date(response.data[key].date).toString()
                })
            } setComment(getCommentData);
        })
    }

    useEffect(() => {
        getUserComments();
    }, []);

    const submitUserCommentHandler = (submitComment) => {
        axios.post('/userComment.json', {
            userName: submitComment.userName,
            addComment: submitComment.addComment,
            date: new Date()
        }).then(response => {
            console.log(response, 'comment data')
        }) 
    }

    return (
        <>  
            <Header />
            <UserComment submitUserCommentHandler={submitUserCommentHandler}  />
            <ShowUserComments getComment={getComment} />
        </>
    )
}

export default AddComment;