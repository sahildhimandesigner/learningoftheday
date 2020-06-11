import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Footer, Header, Button, AddPostModal } from '../../components';
import LearningBlocks from '../LearningBlocks';
import { colors } from '../../theme/colors';
import Spinner from '../../components/UI/Spinner';
import * as actions from '../../store/actions';

const LandingPage = (props) => {
	const submitHandler = (submittedData) => {
		const name = props.currentState.firstName + ' ' +  props.currentState.lastName
		props.onPostSubmit({
			userId: props.currentState.userId,
			name: name,
			title: submittedData.addTitle,
			post: submittedData.addPost,
			date: (new Date()).toString()
		});	
	}

	const addPostButton = typeof props.currentState !== 'undefined' && props.currentState.userId
	? (<Button
			onClick={() => props.onClickHandle(true)}
			spacing='5px 10px 0 0'
			height='45px'
			backgroundColor='#fff'
			color={`${colors.primaryColor}`}
			>Add Post</Button>) : null;

	const body = props.loading ? <Spinner />
	: (<div><Header {...props}>
		{addPostButton}
		</Header>
	{props.openModal && (
		<AddPostModal
			cancelModal={() => props.onClickHandle(false)}
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
		loading: state.loading,
		openModal: state.openModal
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onPostSubmit: (postSubmitData) => dispatch(actions.submitPost(postSubmitData)),
		onClickHandle: (show) => dispatch(actions.showPostModal(show))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LandingPage));