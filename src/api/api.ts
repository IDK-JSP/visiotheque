import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = false;
axios.defaults.params = {
    api_key: "2bc9a7883ffe9f225bee010bee3d0f67",
    include_adult: true,
    include_video: false,
    language: "fr-FR",
}


export const getCollection = (url: string, config?: {}) => {
    return axios.get(url, config)
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


