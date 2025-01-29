import axios from "axios";

axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = false;

export const postVisiotheque = (url: string, data: any,  config?: {}) => {
    axios.defaults.baseURL = 'http://localhost:8080';
    return axios.post(url, data, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        })

}

export const getCollection = (url: string, config?: {}) => {
    return axios.get('https://api.themoviedb.org/3' + url, config)
        .then((response) => {
            return response.data.results;
        })
        .catch((error) => {
        })
}

export const get = (url: string, config?: {}) => {

    return axios.get(url, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
        })

}


