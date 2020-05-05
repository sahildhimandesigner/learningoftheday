import React, { useState, useEffect } from 'react';
import axios from '../../axios-instance';
import { Header } from '../../components';
import LearningBlocks from '../LearningBlocks';

const LandingPage = () => {
	const [postData, setPostData] = useState([]);
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
    return (
        <div>
            <Header />
            <LearningBlocks postData={postData}/>
        </div>       
    )
}

export default LandingPage;