import {FC, useState} from 'react';
import {useLocation} from "react-router";
import {get} from "node:http";

const PeopleDetails: FC<{}> = ({}) => {
    const location = useLocation();
    const id = location.pathname.split("/").pop(); // Récupérer l'ID du film à partir de l'URL
    const [movie, setMovie] = useState<any | null>(null); // Stocker le film récupéré

    const fetchMovieDetails = async () => {
        const response = get(`/person/${id}`);
        if (response) {
            setMovie(response);
        }
    };
    return (
        <div>
            <h1>{}</h1>
        </div>
    );
};

export default PeopleDetails;
