import React, { useState, useEffect } from 'react';
import axios from '../../axios-instance';
import { Header, Button, AddPostModal, Footer } from '../../components';
import LearningBlocks from '../LearningBlocks';
import { colors } from '../../theme/colors';

const LandingPage = ({...props}) => {
	const [postData, setPostData] = useState([]);
	const [openModal, setModalOpen] = useState(false);
	const [token, setToken] = useState('');
	const [userId, setUserId] = useState('');
	const [loginButtonValue, setLoginButtonValue] = useState('Login');

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

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('expirationDate');
		localStorage.removeItem('userId');
		setToken('');
		setUserId('');
		setLoginButtonValue('Login');
	}

	const checkAuthState = () => {
		const token = localStorage.getItem('token');
		if (!token) {
			logout();
		} else {
			if (new Date() >= new Date(localStorage.getItem('expirationDate'))) {
				logout();
			} else {
				const token = localStorage.getItem('token');
				const userId = localStorage.getItem('userId');
				setLoginButtonValue('Logout');
				setToken(token);
				setUserId(userId);
			}
		}
	}

	useEffect(() => {		
		getDataFromDatabase();
	}, []);

	useEffect(() => {
		checkAuthState();
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

    return (
        <div>
            <Header>
				<Button
					onClick={() => clickHandler()}
					spacing='20px 0 0 0'
					backgroundColor='#fff'
					color={`${colors.primaryColor}`}
					>Add Post</Button>
				<Button
					onClick={() => !token ? props.history.push('/auth')  : logout()}
					spacing='20px 0 0 0'
					backgroundColor={`${colors.primaryColor}`}
					color='#fff'
					>{loginButtonValue}</Button>
            </Header>
            {openModal && (
            	<AddPostModal
        			cancelModal={() => setModalOpen(false)}
        			submitHandler={submitHandler}
        			/>
        	)}
            <LearningBlocks postData={postData}/>
			<Footer />
        </div>       
    )
}

export default LandingPage;