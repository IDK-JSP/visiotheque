import React, {FC, useEffect, useState, useTransition} from 'react';
import MovieItem from "../component/MovieItems";
import {Box, Button} from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import "../css/Home.css";
import {get} from "../api/api"
import axios from "axios";

interface Collection {
    results: any[];
}

let page = 1;

const Dashboard: FC = () => {
    const [movieCollection, setMovieCollection] = useState<Collection | undefined>(undefined);
    const [isPending, startTransition] = useTransition();

    const hydrate = () => {
        startTransition(async () => {
            const results = await get("/movie/popular?page=" + page);
            setMovieCollection(results);
            console.log("result", results);
        });
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    };

    useEffect(() => {
        axios.defaults.baseURL = 'https://api.themoviedb.org/3';
        axios.defaults.params = {
            api_key: "2bc9a7883ffe9f225bee010bee3d0f67",
            include_adult: true,
            include_video: false,
            language: "fr-FR",
        }
        hydrate();
    }, []);

    return (
        <>
            {movieCollection && (
                <Box
                    className={"items"}
                    sx={{
                        gap: 10,
                    }}
                >
                    {movieCollection.results.map((film) => (
                        <MovieItem key={film.id} movie={film}/>
                    ))}
                </Box>
            )}

            {/* Les boutons n'apparaissent que si movieCollection est défini */}
            {movieCollection && (
                <div className={"arrow"}>
                    {page !== 1 && (
                        <Button
                            onClick={() => {
                                page--;
                                hydrate();
                            }}
                        >
                            <KeyboardDoubleArrowLeftIcon fontSize="large"/>
                        </Button>
                    )}
                    <Button
                        size="large"
                        onClick={() => {
                            page++;
                            hydrate();
                        }}
                    >
                        <KeyboardDoubleArrowRightIcon fontSize="large"/>
                    </Button>
                </div>
            )}
        </>
    );
};

export default Dashboard;
