import {FC} from 'react';
import "../css/connexion.css"
import {Box} from "@mui/material";

const Inscription: FC<{}> = ({}) => {
    return (

        <Box className={"connexion-container"}>
            <div className={"connexion-form"}>
                <input placeholder={"E-mail"}/>
                <Box className={"password-form"} >
                    <input placeholder={"Mot de passe"}/>
                    <input placeholder={"Confirmer le mot de passe "}/>
                </Box>
                <button>Inscription</button>

            </div>
        </Box>
    );
};

export default Inscription;
