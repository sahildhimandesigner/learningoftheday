import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router'
import { Header, Button, AddPostModal } from '../../components';
import LearningBlocks from '../LearningBlocks';
import { colors } from '../../theme/colors';
import firebase from '../../firebase'

const LandingPage = (props) => {
	const [postData, setPostData] = useState([]);
	const [openModal, setModalOpen] = useState(false);

	const getDataFromDatabase = () => {
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
			getDataFromDatabase();
		  	setModalOpen(false);
		})
		.catch(error => console.log(error));
	}

    return (
        <div>
        	<Header {...props}>
				<Button
					onClick={() => clickHandler()}
					spacing='5px 10px 0 0'
					height='45px'
					backgroundColor='#fff'
					color={`${colors.primaryColor}`}
					>Add Post</Button>
        	</Header>
            {openModal && (
            	<AddPostModal
        			cancelModal={() => setModalOpen(false)}
        			submitHandler={submitHandler}
        			/>
        	)}
            <LearningBlocks postData={postData} {...props}/>
        </div>       
    )
}

export default withRouter(LandingPage);