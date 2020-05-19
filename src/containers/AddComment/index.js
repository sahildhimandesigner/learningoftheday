import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router';
import { UserComment, Header, Wrapper } from '../../components'
import axios from '../../axios-instance'
import ShowUserComments from './showUserComments'
import firebase from '../../firebase'

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

    // const submitUserCommentHandler = (submitComment) => {
    //     axios.post('/userComment.json', {
    //         userName: submitComment.userName,
    //         addComment: submitComment.addComment,
    //         date: new Date()
    //     }).then(response => {
    //     }) 
    // }

    const submitUserCommentHandler = (submitComment) => {
        const postUserComment = firebase.database().ref('userComment/');
        postUserComment.push({
            userName: submitComment.userName,
            addComment: submitComment.addComment,
            date: new Date()
        }) 
    }    

    useEffect(()=> {
        const postId = props.match.params.id;
        axios.get(`/learningPosts/${postId}.json`)
        .then(response => {
            setPost(response.data)
        })
    },[]) 
    //It will work as willmound lifecycle
    //If we don't pass array as seconde parameter then it will work as didmount

    return (
        <>
            <Header {...props} />
            <Wrapper>
                <h1>{post.title}</h1>
                <p>{post.post}</p>
                <span>{post.name}</span>
                <p>{count}: Comments</p>
            </Wrapper>
            <UserComment submitUserCommentHandler={submitUserCommentHandler}  />
            <ShowUserComments getComment={getComment} />  
                      
        </>
    )
}

export default withRouter(AddComment);