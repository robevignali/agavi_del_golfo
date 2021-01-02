import axios from 'axios';

const instance=axios.create({
    baseURL: 'https://graph.instagram.com/'
});

export default instance;