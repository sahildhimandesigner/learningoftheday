import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://learningoftheday-589d4.firebaseio.com/'
});

export default instance;