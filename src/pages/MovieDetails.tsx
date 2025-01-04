import React, {FC, useEffect, useState} from 'react';
import {get} from "../api/api";
import {useLocation} from "react-router";
import {Grid, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Grid2 from "@mui/material/Grid2";
import "../MovieDetails.css"

const MovieDetails: FC<{}> = ({}) => {
    const [movie, setMovie] = useState<any | null>(null); // Stocker le film récupéré
    const location = useLocation();
    const id = Number(location.pathname.split("/").pop()); // Récupérer l'ID du film à partir de l'URL

    // Fonction pour récupérer les détails du film
    const fetchMovieDetails = async () => {
        const response = await get(`/movie/${id}`); // Requête API avec l'ID du film
        if (response) {
            setMovie(response); // Mettre à jour l'état avec les détails du film
        }
    };

    useEffect(() => {
        fetchMovieDetails(); // Récupérer les détails du film lors du chargement du composant
    }, [id]); // Dépendance sur l'ID pour rafraîchir si l'ID change

    if (!movie) {
        return <div>No movie found</div>; // Afficher un message si le film n'est pas trouvé
    }

    return (
        <div>
            <Grid2 className={"card"}>
                <CardMedia className={"card-media"}
                           component="img"
                           width="350px"
                           image={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                           alt={"Affiche du film" + movie.title}
                />
                <div className={"card-content"}>
                    <div className={"card-title"}>
                        <Typography variant="h4">{movie.title}</Typography>
                        <button>+</button>
                    </div>
                    <div className={"write"}>
                        <Typography variant="body1">{movie.overview}</Typography>
                        <Typography variant="body2">Release Date: {movie.release_date}</Typography>
                        <Typography variant="body2">Rating: {movie.vote_average}</Typography>
                    </div>
                </div>
            </Grid2>
        </div>
    );
};

export default MovieDetails;
