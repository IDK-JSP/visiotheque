import React, {FC, useEffect, useState, useTransition} from 'react';
import MovieItem from "../component/MovieItems";
import Grid2 from "@mui/material/Grid2";
import {useTheme} from "@mui/material";
import {get} from "../api/api";

interface Collection {
    results: []
}

const Dashboard: FC<{}> = ({}) => {
    const [movieCollection, setMovieCollection] = useState<Collection | undefined>(undefined)
    const [isPending, startTransition] = useTransition()

    const hydrate = () => {
        // @ts-ignore
        startTransition(async () => {
            const results = await get("/movie/popular?page=3")
            startTransition(() => {
                setMovieCollection(results)
                console.log("result", results)
            })
        });
    }

    useEffect(() => {
        hydrate()
    }, []);


    return (
        <>
            {movieCollection &&
                    <Grid2 className={"items"} container spacing={3}>
                        {movieCollection.results.map((film) => (
                            <MovieItem movie={film}/>
                        ))
                        }
                    </Grid2>
            }
        </>
    );
};

export default Dashboard;