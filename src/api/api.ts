import axios from "axios";

axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = false;

export const postVisiotheque = (url: string, data: any,  config?: {}) => {
    return axios.post('http://localhost:8080' + url, data, config)
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
    axios.defaults.params = {
        api_key: "2bc9a7883ffe9f225bee010bee3d0f67",
        include_adult: false,
        include_video: false,
        language: "fr-FR"
    }
    return axios.get('https://api.themoviedb.org/3' +url , config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
        })

}


