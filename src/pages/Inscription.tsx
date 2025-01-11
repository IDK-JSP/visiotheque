import {FC} from 'react';
import "../css/connexion.css"
import {Box} from "@mui/material";

const Inscription: FC<{}> = ({}) => {
    return (

        <Box sx={{display: "flex", height: "80vh", justifyContent: "center", alignItems: "center"}}>
            <div className={"connexion-form"}>
                <input placeholder={"E-mail"}/>
                <Box sx={{display:"flex",flexDirection:"column", gap:2}}>
                    <input placeholder={"Mot de passe"}/>
                    <input placeholder={"Confirmer le mot de passe "}/>
                </Box>
                <button>Inscription</button>

            </div>
        </Box>
    );
};

export default Inscription;
