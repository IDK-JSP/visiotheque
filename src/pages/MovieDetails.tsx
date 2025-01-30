import React, {FC, useEffect, useState} from 'react';
import {get} from "../api/api";
import {useLocation, useNavigate} from "react-router";
import {Box, Button, Rating, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import "../css/MovieDetails.css";
import AddListButton from "../component/AddListButton";

const MovieDetails: FC<{}> = ({}) => {
    const [movie, setMovie] = useState<any | null>(null); // Stocker le film récupéré
    const [cast, setCast] = useState<any | null>(null);
    const location = useLocation();
    const navigate = useNavigate(); // Utilisation du hook useNavigate
    const id = location.pathname.split("/").pop(); // Récupérer l'ID du film à partir de l'URL

    // Fonction pour récupérer les détails du film
    const fetchMovieDetails = async () => {
        const response = await get(`/movie/${id}`); // Requête API avec l'ID du film
        if (response) {
            setMovie(response); // Mettre à jour l'état avec les détails du film
        }

        const credits = await get(`/movie/${id}/credits`);
        if (credits) {
            setCast(credits); // Mettre à jour l'état avec les crédits du film (acteurs)
        }
    };

    useEffect(() => {
        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>; // Afficher un message si le film n'est pas trouvé
    }

    // Filtrage des acteurs avec "Acting" dans le champ "known_for_department"
    const actors = cast?.cast?.filter((person: any) => {
        return person.known_for_department?.toLowerCase() === "acting";
    });

    // Limiter à 10 premiers acteurs
    const topActors = actors?.slice(0, 10);

    // Fonction pour naviguer vers la page PeopleDetails d'un acteur
    const handleActorClick = (actorId: number) => {
        navigate(`/PeopleDetails/${actorId}`); // Redirige vers la page de détails de l'acteur
    };

    return (
        <Box className={"movie-details"}
             sx={{
                 backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
             }}
        >
            {/* Overlay avec opacité réduite */}
            <Box className={"background-image"}
                 sx={{
                     backgroundColor: 'rgba(0, 0, 0, 0.7)', // Couleur noire avec opacité 50%
                 }}
            />

            <Box className="card" sx={{position: 'relative'}}>
                <CardMedia
                    className="card-media"
                    component="img"
                    sx={{width: "250px"}}
                    image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={`Affiche du film ${movie.title}`}
                />
                <div className="card-content">
                    <div className="card-title">
                        <Typography variant="h4"><b>{movie.title}</b></Typography>
                        <AddListButton movie_id={parseInt(movie.id)}
                                       title={movie.title}
                                       poster_path={movie.poster_path} />
                    </div>
                    <div className={"cast"}>
                        {topActors?.map((actor: any) => (
                            <button className={"cast-button"}
                                key={actor.id}
                                onClick={() => navigate("/PeopleDetails/" + actor.id)} // Quand on clique, on redirige vers la page de l'acteur
                            >
                                {actor.name}
                            </button>
                        ))}
                    </div>
                    <div className="write">
                        <Rating name="half-rating-read" defaultValue={movie.vote_average / 2} precision={1} readOnly/>
                        <Typography variant="body1">{movie.overview}</Typography>
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default MovieDetails;
