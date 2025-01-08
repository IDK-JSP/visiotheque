import React, {FC, useEffect, useState} from 'react';
import {get} from "../api/api";
import {useLocation} from "react-router";
import {Box, Grid, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Grid2 from "@mui/material/Grid2";
import "../MovieDetails.css"

const MovieDetails: FC<{}> = ({}) => {
    const [movie, setMovie] = useState<any | null>(null); // Stocker le film récupéré
    const location = useLocation();
    const id = location.pathname.split("/").pop(); // Récupérer l'ID du film à partir de l'URL

    // Fonction pour récupérer les détails du film
    const fetchMovieDetails = async () => {
        const response = await get(`/movie/${id}`); // Requête API avec l'ID du film
        if (response) {
            setMovie(response); // Mettre à jour l'état avec les détails du film
        }
    };
   fetchMovieDetails()

    if (!movie) {
        return <div></div>; // Afficher un message si le film n'est pas trouvé
    }

    return (
        <div className={"center"}>
            <Box className={"card"}>
                <CardMedia className={"card-media"}
                           component="img"
                           sx={{width: "250px"}}
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
                        <Typography variant="body2">Rating: {movie.vote_average}</Typography>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default MovieDetails;
