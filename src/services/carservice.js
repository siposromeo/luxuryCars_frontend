import Axios from "axios";
Axios.defaults.baseURL = import.meta.env.VITE_API_URL;
export default {
    getAllCars() {
        return Axios.get('/cars')
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return Promise.reject(err.response);
        })
    },
    async lapozz(num){
        return await Axios.get(`http://localhost:8000/api/cars?page=${num}`)
    }
}