import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://react-app-9dbd9.firebaseio.com/'
});

export default axiosInstance;