import Axios from 'axios';
Axios.defaults.baseURL = import.meta.env.VITE_API_URL;
export default {
    registerUser(data) {
        return Axios.post('/register', data)
        .then(response => {
            return response;
        })
        .catch(err => {
            return Promise.reject(err.response);
        })
    },
    getuserbyID(id) {
        console.log(id);
        return Axios.get('/user/' + id)
        .then(response => {
            return response;
        })
        .catch(err => {
            return Promise.reject(err.response);
        })
    }
}