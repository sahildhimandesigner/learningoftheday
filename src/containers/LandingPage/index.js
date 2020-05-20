import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router'
import axios from '../../axios-instance';
import { Header, Button, AddPostModal } from '../../components';
import LearningBlocks from '../LearningBlocks';
import { colors } from '../../theme/colors';

const LandingPage = (props) => {
	const [postData, setPostData] = useState([]);
	const [openModal, setModalOpen] = useState(false);

	const getDataFromDatabase = () => {
		axios.get('/learningPosts.json')
	      .then(response => {
	        const getData = [];
	        for (const key in response.data) {
	          getData.push({
	            id: key,
	            name: response.data[key].name,
	            heading: response.data[key].title,
	            content: response.data[key].post,
	            date: new Date(response.data[key].date).toString()
	          });
	        }
	        const reversedOrder = getData.reverse();
	        setPostData(reversedOrder);
	      })
	      .catch(error => console.log(error));  
	}
	useEffect(() => {
		getDataFromDatabase();
	}, []);

	useEffect(() => {

	});

const clickHandler = () => setModalOpen(true);

	const submitHandler = (submittedData) => {
		axios.post('/learningPosts.json', {
		  name: submittedData.addName,
		  title: submittedData.addTitle,
		  post: submittedData.addPost,
		  date: new Date()
		})
		.then(response => {
			getDataFromDatabase();
		  setModalOpen(false);
		})
		.catch(error => console.log(error));
	}

	// const loginHandler = () => {
	// 	return !token ? props.history.push
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
            <LearningBlocks postData={postData}/>
        </div>       
    )
}

export default withRouter(LandingPage);