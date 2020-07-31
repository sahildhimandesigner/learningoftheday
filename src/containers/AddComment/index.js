import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import withStyle from 'react-jss'
import { Footer, UserComment, Header} from '../../components'
import ShowUserComments from './showUserComments'
import firebase from '../../firebase'
import UserCommentStyle from './style'
import moment from 'moment';
import LearningBlock from '../../components/LearningBlock';
import * as actions from '../../store/actions';

const AddComment = ({classes, ...props}) => {
    const [getComment, setComment] = useState([])
    const [count, setCount] = useState(0);
    const [post, setPost] = useState({})
    const postDate = moment(post.date).fromNow();
    

    const getUserComments = () => {
        const postId = props.match.params.id;
        // const getComment = firebase.database().ref(`userComment/${postId}`);
        // getComment.on('value', function(snapshot){
        //     const getCommentData = [];
            
        //     for(const key in snapshot.val()) {
        //          getCommentData.push({
        //              id: key,
        //              userName: snapshot.val()[key].userName,
        //              addComment: snapshot.val()[key].addComment,
        //              date: (new Date(snapshot.val()[key].date)).toString()
        //          })
        //      } setComment(getCommentData);
        //      setCount(getCommentData.length)
        // })
    }
    useEffect(() => {    
        getUserComments();
    }, []);

    const submitUserCommentHandler = (submitComment) => {                   
        const postId = props.match.params.id;         
        const userName = props.auth.firstName + ' ' + props.auth.lastName;
        const userId = props.auth.userId
        props.postUserComment({
            postId: postId,
            userName: userName,            
            addComment: submitComment.addComment,
            userId: userId,
            date: (new Date()).toString()
        }) 
    }    

    useEffect(()=> {
        const postId = props.match.params.id;
        const getAllPost = firebase.database().ref(`allPost/${postId}`);
        getAllPost.on('value', function(snapshot){
            const singlePost = snapshot.val();
            setPost(singlePost);
        })
    },[]) 
    return (
        <>
            <Header {...props} />
            <div className={classes.postBoxCol}>
                <div className={classes.userDetailCol}> 
                    <LearningBlock
                        name={post.name}
                        title={post.title}
                        content={post.post}
                        date={postDate}
                    />
                </div>                    
            </div>            
            <UserComment 
                count={count} 
                submitUserCommentHandler={submitUserCommentHandler}  
                /> 
            <ShowUserComments 
                getComment={getComment} 
                />  
            <Footer />
        </>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postUserComment: (postSubmitComment) => dispatch(actions.submitComments(postSubmitComment)),        
        postUserComment: (postSubmitComment) => dispatch(actions.submitComments(postSubmitComment)),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyle(UserCommentStyle)(withRouter(AddComment)));
