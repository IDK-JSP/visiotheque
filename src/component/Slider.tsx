import React, {FC, useEffect, useRef, useState, useTransition} from 'react';
import {get} from "../api/api";
import MovieItem from "./MovieItems";
import "../css/Slider.css";

 // Assurez-vous que le chemin est correct

const ITEM_WIDTH = 500;

interface Collection {
    results: any[];
}

const Slider: FC = () => {
    const [movieCollection, setMovieCollection] = useState<Collection | undefined>(undefined);
    const [isPending, startTransition] = useTransition();
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = (scrollAmount: number) => {
        if (containerRef.current) {
            const newScrollPosition = containerRef.current.scrollLeft + scrollAmount;
            setScrollPosition(newScrollPosition);
            containerRef.current.scrollLeft = newScrollPosition;
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
        return <div className={"loading-container"}><img className={"loading-logo"} src={"chargement-removebg-preview.png"}/></div>;
    }

    return (
        <div className={"slider-container"} style={{position: "relative"}}>
            {/* Les boutons de défilement à gauche et à droite */}
            <button
                className="scroll-button left"
                onClick={() => handleScroll(-ITEM_WIDTH)}
            >
                ←
            </button>

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

            <button
                className="scroll-button right"
                onClick={() => handleScroll(ITEM_WIDTH)}
            >
                →
            </button>
        </div>
    );
};

export default Slider;
