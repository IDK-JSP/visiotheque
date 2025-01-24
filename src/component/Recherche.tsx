import React, {useState} from "react";
import MovieItem from "./MovieItems";
import "../css/Recherche.css"
import {getCollection} from "../api/api";
import {Box} from "@mui/material";
import CatList from "./CatList";
import "../css/CateItems.css"

const SearchMovie = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);

    const apiUrl = "https://api.themoviedb.org/3/search/movie";

    const handleSearch = async () => {
        if (!query) return;

        try {

            const list = await getCollection(apiUrl,{params: {query: query}});

            if (list) {
                setResults(list);
            } else {
                setResults([]);
            }
        } catch (error) {
            console.error("Erreur lors de la recherche:", error);
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Recherche un film..."
                value={query}
                onChange={(e) => {setQuery(e.target.value);
                handleSearch();
                }}
            />
            <Box>
                {results.length > 0 && results.length<30? (
                    <div className={"items"}>
                        {results.map((film) => (
                            <MovieItem movie={film}/>
                        ))
                        }
                    </div>
                ) : (
                    <CatList/>
                )}
            </Box>
        </>
    );
};

export default SearchMovie;
