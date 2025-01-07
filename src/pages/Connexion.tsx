import {FC} from 'react';
import "../connexion.css"
import {Box} from "@mui/material";

const Connexion: FC<{}> = ({}) => {
    return (
        <Box sx={{display:"flex",height:"80vh", justifyContent: "center", alignItems: "center"}}>
            <div className={"connexion-form"}>
                <input placeholder={"E-mail"}/>
                <input placeholder={"Mot de passe"}/>
                <button>Connexion</button>
            </div>
        </Box>
    );
};

export default Connexion;
