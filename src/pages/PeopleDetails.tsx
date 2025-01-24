import React, {FC, useEffect, useState} from 'react';
import {useLocation} from 'react-router';
import {get} from '../api/api';
import CardMedia from "@mui/material/CardMedia";
import { Typography} from "@mui/material";
import "../css/peopledetails.css"

const PeopleDetails: FC<{}> = ({}) => {
    const location = useLocation();
    const id = location.pathname.split('/').pop();

    const [actor, setActor] = useState<any | null>(null);

    const fetchActorDetails = async () => {
        try {
            const response = await get(`/person/${id}`);
            if (response) {
                setActor(response);
            } else {
                console.error('No response from API');
            }
        } catch (error) {
            console.error('Error fetching actor details', error);
        }
    };

    useEffect(() => {
        fetchActorDetails();
    }, [id]);

    if (!actor) {
        return <div>Loading...</div>;
    }

    return (
        <div className="actor-details">
            <CardMedia
                className="card-media"
                component="img"
                sx={{width: "250px"}}
                image={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={`Affiche du film ${actor.name}`}
            />
            <div className="card-content">
                <div className="card-title">
                    <Typography variant="h4"><b>{actor.name}</b></Typography>
                    {/*<button>+</button>*/}
                </div>

                <div className="write">
                    <Typography sx={{fontSize:15}} variant="body1">{actor.biography}</Typography>
                </div>
            </div>
        </div>
    );
};

export default PeopleDetails;
