import React, {FC, useEffect, useRef, useState, useTransition} from 'react';
import {get} from "../api/api";
import MovieItem from "./MovieItems";
import "../css/Slider.css"

import loading from "./chargement-removebg-preview.png"; // Assurez-vous que le chemin est correct

const ITEM_WIDTH = 250;

interface Collection {
    results: any[];
}

const Slider: FC = () => {
    const [movieCollection, setMovieCollection] = useState<Collection | undefined>(undefined);
    const [isPending, startTransition] = useTransition();
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null); // Correction du type de la ref

    const handleScroll = (scrollAmount: number) => {
        if (containerRef.current) {
            const newScrollPosition = containerRef.current.scrollLeft + scrollAmount; // Calculer la nouvelle position
            setScrollPosition(newScrollPosition); // Mettre à jour le state si nécessaire
            containerRef.current.scrollLeft = newScrollPosition; // Déplacer la position de défilement
        }
    };

    const hydrate = () => {
        startTransition(async () => {
            const results = await get("/movie/upcoming");
            setMovieCollection(results);
            console.log("result", results);
        });
    };

    useEffect(() => {
        hydrate();
    }, []);

    if (!movieCollection) {
        return <img src={loading}/>;
    }

    return (
        <div className={"container"}>
            <div
                ref={containerRef}
                style={{
                    overflowX: "scroll",
                    scrollBehavior: "smooth",
                    width: "100%",
                }}
            >
                <div className={"content-box"}>
                    {movieCollection.results.map((film) => (
                        <MovieItem key={film.id} movie={film}/>
                    ))}
                </div>
            </div>
            <div className={"actions-buttons"}>
                <button onClick={() => handleScroll(-ITEM_WIDTH)}>←</button>
                <button onClick={() => handleScroll(ITEM_WIDTH)}>→</button>
            </div>
        </div>
    );
};

export default Slider;
