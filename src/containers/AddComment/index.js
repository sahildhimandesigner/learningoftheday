import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router';
import withStyle from 'react-jss'
import { UserComment, Headings, Header, Wrapper } from '../../components'
import axios from '../../axios-instance'
import ShowUserComments from './showUserComments'
import firebase from '../../firebase'
import UserCommentStyle from './style'
import AvtarIcon from '../../images/user-placeholder.svg'

const AddComment = ({classes, ...props}) => {
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
        const userId = props.currentState.userId;
        const postUserComment = firebase.database().ref(`userComment/${postId}`);
        postUserComment.push({
            userName: submitComment.userName,
            addComment: submitComment.addComment,
            userId: userId,          
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
            <div className={classes.postBoxCol}>
                <div className={classes.userDetailCol}>
                    <Headings as='h3' margin='0 0 10px 0'>{post.title}</Headings>
                    <Wrapper padding='0'>
                        <div className={classes.avtar}>
                            <img src={AvtarIcon} alt='Icon'/>
                        </div>
                        <div className={classes.userName}>
                            <Headings as='h4' margin='0' transform='uppercase'>{post.name}</Headings>
                            <span className={classes.date}>{post.date}</span>
                        </div>
                    </Wrapper>                    
                    <Headings className={classes.post} margin='16px 0 20px'>{post.post}</Headings>
                </div>                    
            </div>            
            <UserComment count={count} submitUserCommentHandler={submitUserCommentHandler}  /> 
            <ShowUserComments getComment={getComment} />  
        </>
    )
}

export default withStyle(UserCommentStyle)(withRouter(AddComment));