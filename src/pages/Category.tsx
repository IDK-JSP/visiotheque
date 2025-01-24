import React, {FC, useEffect, useState} from 'react';
import {get} from "../api/api";
import {useLocation} from "react-router";
import MovieItem from "../component/MovieItems";
import {Button} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

let page = 1;
const Category: FC<{}> = ({}) => {
    const location = useLocation();
    const id = location.pathname.split('/').pop();

    const [movieList, setMovieList] = useState<any[]>([]); // Initialiser avec un tableau vide
    const fetchFilmCategory = async () => {
        try {
            const response = await get(`/discover/movie?page=${page}&with_genres=${id}`);
            if (response) {
                setMovieList(response.results || []); // Mettre à jour avec une liste vide si pas de résultats
            } else {
                console.error('No response from API');
            }
        } catch (error) {
            console.error('Error fetching movie details', error);
        }
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    };

    useEffect(() => {
        fetchFilmCategory();
    }, []);

    return (
        <div>
            <div className={"items"}>
                {movieList && movieList.length > 0 && movieList.map((film: any) => (
                    <MovieItem movie={film} key={film.id}/>
                ))}
            </div>
            {movieList && (
                <div className={"arrow"}>
                    {page !== 1 && (
                        <Button
                            onClick={() => {
                                page--;
                                fetchFilmCategory();
                            }}
                        >
                            <KeyboardDoubleArrowLeftIcon fontSize="large"/>
                        </Button>
                    )}
                    <Button
                        size="large"
                        onClick={() => {
                            page++;
                            fetchFilmCategory();
                        }}
                    >
                        <KeyboardDoubleArrowRightIcon fontSize="large"/>
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Category;
