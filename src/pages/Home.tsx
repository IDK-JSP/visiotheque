import React, {FC, useEffect, useState, useTransition} from 'react';
import MovieItem from "../component/MovieItems";
import Grid2 from "@mui/material/Grid2";
import {Box, Button, useTheme} from "@mui/material";
import {get} from "../api/api";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import "../Home.css"
import {behavior} from "@testing-library/user-event/event/behavior/registry";

interface Collection {
    results: []
}

let page = 1;
const Dashboard: FC<{}> = ({}) => {
    const [movieCollection, setMovieCollection] = useState<Collection | undefined>(undefined)
    const [isPending, startTransition] = useTransition()

    const hydrate = () => {
        // @ts-ignore
        startTransition(async () => {
            const results = await get("/movie/popular?page=" + page)
            startTransition(() => {
                setMovieCollection(results)
                console.log("result", results)
            })
        });
        window.scrollTo({top:0, left:0,behavior:"smooth"});
    }

    useEffect(() => {
        hydrate()
    }, []);


    return (
        <>
            {movieCollection &&
                <Box className={"items"} sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap", gap: 10, justifyContent: "center"
                }}>
                    {movieCollection.results.map((film) => (
                        <MovieItem movie={film}/>
                    ))
                    }
                </Box>
            }
            {page != 1 ?<div className={"arrow"}>
                <Button onClick={() => {
                    page--;
                    hydrate()
                }}><KeyboardDoubleArrowLeftIcon fontSize="large"/></Button>
                <Button size="large" onClick={() => {
                    page++;
                    hydrate()
                }} ><KeyboardDoubleArrowRightIcon fontSize="large"/></Button>
                </div>
                :
                    <div className={"arrow"}>
                    <Button size="large" onClick={() => {
                    page++;
                    hydrate()
                }} ><KeyboardDoubleArrowRightIcon fontSize="large"/></Button>
                    </div>
            }
        </>
    );
};
//scroll to
export default Dashboard;