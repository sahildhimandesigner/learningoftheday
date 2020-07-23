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
		const name = props.auth.firstName + ' ' +  props.auth.lastName
		props.onPostSubmit({
			userId: props.auth.userId,
			name: name,
			title: submittedData.addTitle,
			post: submittedData.addPost,
			date: (new Date()).toString()
		});	
	}

	const addPostButton = props.auth.loggedIn
	? (<Button
			onClick={() => props.onClickHandle(true)}
			spacing='10px 15px'
			height='45px'
			backgroundColor='#fff'
			color={`${colors.primaryColor}`}
			>Add Post</Button>) : null;

	const body = props.loading ? <Spinner />
	: (<div>
		<Header {...props}>
		{addPostButton}
		</Header>
	{props.openModal && (
		<AddPostModal
			cancelModal={() => props.onClickHandle(false)}
			submitHandler={submitHandler}
			/>
	)}              
	<LearningBlocks 
		postData={props.postData} 
		{...props}/>
		<Footer />
	</div>);
    return (
        <div>
			{body}
        </div>
    )
}

const mapStateToProps = state => {
	return {
		postData: state.post.posts,
		loading: state.post.loading,
		openModal: state.post.openModal,
		auth: state.auth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onPostSubmit: (postSubmitData) => dispatch(actions.submitPost(postSubmitData)),
		onClickHandle: (show) => dispatch(actions.showPostModal(show))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LandingPage));