import React, { useState, useEffect } from 'react';
import axios from '../../axios-instance';
import { Header, Button, AddPostModal } from '../../components';
import LearningBlocks from '../LearningBlocks';
import { colors } from '../../theme/colors';

const LandingPage = () => {
	const [postData, setPostData] = useState([]);
	const [newPostTitle, setNewPostTitle] = useState('');
	const [newPostContent, setNewPostContent] = useState('');
	const [openModal, setModalOpen] = useState(false);
	useEffect(() => {
	  axios.get('/learningPosts.json')
	      .then(response => {
	        const getData = [];
	        for (const key in response.data) {
	          getData.push({
	            id: key,
	            heading: response.data[key].title,
	            content: response.data[key].post,
	            date: new Date(response.data[key].date).toString()
	          });
	        }
	        setPostData(getData);
	      })
	      .catch(error => console.log(error));  
	}, []);

	const clickHandler = () => {
		setModalOpen(true);
	}

	const submitHandler = () => {
		if (newPostTitle !== null
			&& newPostContent !== null) {			
			const title = newPostTitle;
			const post = newPostContent;
			const date = new Date();
			axios.post('/learningPosts.json', {
			  title: newPostTitle,
			  post: newPostContent,
			  date: new Date()
			})
			.then(response => {
				setPostData(prevData => [
					...prevData,
						{id: response.data.name,
						heading: title,
			            content: post,
			            date: date.toString()}
				])
			  setModalOpen(false);
			})
			.catch(error => console.log(error));
		}		
	}

    return (
        <div>
            <Header>
            		<Button
            		onClick={() => clickHandler()}
            		spacing='20px 0 0 0'
            		backgroundColor='#fff'
            		color={`${colors.primaryColor}`}
            		>Add Post</Button>
            </Header>
            {openModal && (
            	<AddPostModal
        			cancelModal={() => setModalOpen(false)}
        			addedTitle={(value) => setNewPostTitle(value)}
        			addedPost={(value) => setNewPostContent(value)}
        			titleValue={newPostTitle}
        			contentValue={newPostContent}
        			submitHandler={submitHandler}
        			/>
        	)}
            <LearningBlocks postData={postData}/>
        </div>       
    )
}

export default LandingPage;