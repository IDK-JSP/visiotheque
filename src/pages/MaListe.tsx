import {FC, useState, useTransition} from 'react';
import Slider from "../component/Slider";
import {get} from "../api/api";
import axios from "axios";

const MaListe: FC<{}> = ({}) => {
    const data = {
        tmdb_id:123456
    };
    function postFavoris(){
        axios.defaults.baseURL="";
        axios.defaults.params={};
    const options = {
        method: 'POST',
        url: 'http://localhost:8080/visiotheque/favoris',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data,
    };

    console.log("URL envoyée : ", options.url);
    console.log("Données envoyées : ", data);

    axios
        .request(options)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));

    }

    return (
        <div>
            <Slider/>
        </div>
    );
};

export default MaListe;
