import React, { useState, useEffect } from 'react'
import { UserComment, Header } from '../../components'
import axios from '../../axios-instance'
import ShowUserComments from './showUserComments'

const AddComment = (props) => {
    
    const [getComment, setComment] = useState([])
    const [count, setCount] = useState(0);
    const [post, setPost] = useState({})

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
            setCount(getCommentData.length)
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
        }) 
    }

    useEffect(()=> {
        const postId = props.match.params.id;
        axios.get(`/learningPosts/${postId}.json`)
        .then(response => {
            setPost(response.data)
        })
    },[])

    return (
        <>  
            <Header />
            <UserComment submitUserCommentHandler={submitUserCommentHandler}  />
            <ShowUserComments getComment={getComment} />  
            <p>{count}</p>          
        </>
    )
}

export default AddComment;