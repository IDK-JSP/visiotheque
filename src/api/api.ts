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
/*axios.interceptors.response.use(
    (response) => {
        console.log("interceptor response", response);
        return response;
    },
    (error) => {
        const {status} = error.response;
        console.log("interceptor error", error.response.status);
        console.log("interceptor status", status);
        switch (status) {
            case 400:
                console.log("ERROR 400");
                break;
            case 401:
                console.log("ERROR 401");
                console.log(Promise.reject(error?.response ?? error));
                return Promise.reject(error?.response ?? error);
            case 403:
                console.log("ERROR 403");
                break;
            case 404:
                console.log("ERROR 404");
                break
            case 500:
                console.log("ERROR 500");
                break;
            default:
                break;
        }
    }
);*/

export const getCollection = (url: string, config?: {}) => {
    return axios.get(url, config)
        .then((response) => {
            console.log("response", response);
            return response.data.results;
        })
        .catch((error) => {
        })
}
export const get = (url: string, config?: {}) => {
    return axios.get(url, config)
        .then((response) => {
            console.log("response", response);
            return response.data;
        })
        .catch((error) => {
        })

}
export const post = (url: string, data: any, config?: {}) => {
    return axios.post(url, data, config)
        .then((response) => {
            console.log("response", response);
            return response.data;
        })
        .catch((error) => {
            console.error("Erreur lors de l'envoi des données : ", error);
            throw error;
        });
}

export const put = (url: string, data: any, config?: {}) => {
    return axios.put(url, data, config)
        .then((response) => {
            console.log("response", response);
            return response.data;
        })
        .catch((error) => {
            console.error("Erreur lors de la mise à jour des données : ", error);
            throw error;
        });
}

export const remove = (url: string, config?: {}) => {
    return axios.delete(url, config)
        .then((response) => {
            console.log("response", response);
            return response.data;
        })
        .catch((error) => {
            console.error("Erreur lors de la suppression des données : ", error);
            throw error;
        });
}
