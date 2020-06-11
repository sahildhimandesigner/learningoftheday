import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Footer, Header, Button, AddPostModal } from '../../components';
import LearningBlocks from '../LearningBlocks';
import { colors } from '../../theme/colors';
import firebase from '../../firebase'
import Spinner from '../../components/UI/Spinner';
import * as actions from '../../store/actions';

const LandingPage = (props) => {
	const [openModal, setModalOpen] = useState(false);

	const clickHandler = () => setModalOpen(true);

	const submitHandler = (submittedData) => {		
		const allPost = firebase.database().ref(`allPost`);
		const name = props.currentState.firstName + ' ' +  props.currentState.lastName
		allPost.push({
			userId: props.currentState.userId,
			name: name,
			title: submittedData.addTitle,
			post: submittedData.addPost,
			date: (new Date()).toString()
		})
		.then(response => {
			firebase.database().ref(`users`)
			.child(`${props.currentState.userId}`)
			.child(`coins`)
			.transaction(function(currentCoins) {
				return (currentCoins || 0) + 1
			});
		  	setModalOpen(false);
		})
		.catch(error => console.log(error));
	}

	const addPostButton = typeof props.currentState !== 'undefined' && props.currentState.userId
	? (<Button
			onClick={() => clickHandler()}
			spacing='5px 10px 0 0'
			height='45px'
			backgroundColor='#fff'
			color={`${colors.primaryColor}`}
			>Add Post</Button>) : null;

	const body = props.loading ? <Spinner />
	: (<div><Header {...props}>
		{addPostButton}
		</Header>
	{openModal && (
		<AddPostModal
			cancelModal={() => setModalOpen(false)}
			submitHandler={submitHandler}
			/>
	)}
	<LearningBlocks postData={props.postData} {...props}/>
	<Footer /></div>);
    return (
        <div>
			{body}
        </div>       
    )
}

const mapStateToProps = state => {
	return {
		postData: state.posts,
		loading: state.loading
	}
}

export default connect(mapStateToProps)(withRouter(LandingPage));