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
        const postId = props.match.params.id;
        const getComment = firebase.database().ref(`userComment/${postId}`);
        getComment.on('value', function(snapshot){
            const getCommentData = [];
            
            for(const key in snapshot.val()) {
                 getCommentData.push({
                     id: key,
                     userName: snapshot.val()[key].userName,
                     addComment: snapshot.val()[key].addComment,
                     date: new Date(snapshot.val()[key].date).toString()
                 })
             } setComment(getCommentData);
             setCount(getCommentData.length)
        })
    }

    useEffect(() => {
        getUserComments();
    }, []);

    const submitUserCommentHandler = (submitComment) => {
        const postId = props.match.params.id;
        
        const postUserComment = firebase.database().ref(`userComment/${postId}`);
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