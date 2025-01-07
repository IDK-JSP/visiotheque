import {FC} from 'react';
import * as React from 'react';
import "../MovieItems.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid2';
import {MovieItem as MovieType} from "../@types/movieItem"
import {useNavigate} from "react-router";
import {Box} from "@mui/material";

const MovieItem: FC<{ movie: MovieType }> = ({movie}) => {
    let navigate = useNavigate();
    return (
        <Box sx={{width: 300, height: 500}}>
            <button className={"button"} onClick={() => navigate("/MoviesDetails/" + movie.id)}>
                <Card>
                    <CardActionArea>
                        <CardMedia sx={{height: "auto", width:  300}}
                            component="img"
                            height="auto"
                            image={"https://image.tmdb.org/t/p/original" + movie.poster_path}
                            alt={"Affiche du film" + movie.title}
                        />
                        <CardContent className={"wrote"}>
                            <Typography gutterBottom variant="h5" component="div">
                                {movie.title}
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </button>
        </Box>
    );
};

export default MovieItem;
