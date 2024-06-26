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
    getAllOfTheCars(){
        return Axios.get('/carsAll')
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return Promise.reject(err.response);
        })
    },
    getCarById(id) {
        return Axios.get(`/cars/${id}`)
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return Promise.reject(err.response);
        })
    },
    getNaptarById(id){
        return Axios.get(`/naptar/${id}`)
        .then(resp => {
            return resp.data;
        })
        .catch(err => {
            return Promise.reject(err.response);
        })
    },
    async lapozz(num){
        return await Axios.get(`/cars?page=${num}`)
    }
}