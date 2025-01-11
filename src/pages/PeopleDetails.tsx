import {FC, useEffect, useState} from 'react';
import {useLocation} from "react-router";
import axios from "axios";

const PeopleDetails: FC<{}> = ({}) => {
    const location = useLocation();
    const id = location.pathname.split("/").pop(); // Récupérer l'ID du film à partir de l'URL

    const [actor, setActor] = useState<any | null>(null); // Stocker le film récupéré

    const fetchPersonData = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/person/${id}`, {
                params: {
                    api_key: '2bc9a7883ffe9f225bee010bee3d0f67', // Remplacez par votre clé API TMDb
                },
            });
            console.log(response.data); // Vous pouvez traiter les données ici
            setActor(response.data)
    };



    useEffect(() => {
        fetchPersonData()
    }, []);
    return (
        <div>

        </div>
    );
};

export default PeopleDetails;
