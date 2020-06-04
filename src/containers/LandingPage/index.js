import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router'
import { Footer, Header, Button, AddPostModal } from '../../components';
import LearningBlocks from '../LearningBlocks';
import { colors } from '../../theme/colors';
import firebase from '../../firebase'
import Spinner from '../../components/UI/Spinner';

const LandingPage = (props) => {
	const [postData, setPostData] = useState([]);
	const [openModal, setModalOpen] = useState(false);
	const [loadingTrue, setLoadingTrue] = useState(true);

	const getDataFromDatabase = async () => {
		setLoadingTrue(true);		
		const getAllPost = firebase.database().ref(`allPost`);
		getAllPost.on('value', function(snapshot){			
			const getData = [];
			for(const key in snapshot.val()) {
					getData.push({
						id: key,
						name: snapshot.val()[key].name,
						heading: snapshot.val()[key].title,
						content: snapshot.val()[key].post,
						date: (new Date(snapshot.val()[key].date)).toString()
					});
			}
			const reversedOrder = getData.reverse();
			setPostData(reversedOrder);
			setLoadingTrue(false);
		})
	}

	useEffect(() => {
		getDataFromDatabase();
	}, []);

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
			getDataFromDatabase();
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

	const body = loadingTrue ? <Spinner />
	: (<div><Header {...props}>
		{addPostButton}
		</Header>
	{openModal && (
		<AddPostModal
			cancelModal={() => setModalOpen(false)}
			submitHandler={submitHandler}
			/>
	)}
	<LearningBlocks postData={postData} {...props}/>
	<Footer /></div>);
    return (
        <div>
			{body}
        </div>       
    )
}

export default withRouter(LandingPage);