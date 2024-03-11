import Axios from './dataservice';

export default {
    registerUser(data) {
        return Axios.post('/register', data)
        .then(response => {
            return response;
        })
        .catch(err => {
            return Promise.reject(err.response);
        })
    }
}