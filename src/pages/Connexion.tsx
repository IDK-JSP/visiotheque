import {FC, useContext} from 'react';
import "../css/connexion.css"
import {Box} from "@mui/material";
import {LogContext} from "../App";
import {useNavigate} from "react-router";

const Connexion: FC<{}> = ({}) => {
    let navigate = useNavigate();
    function logIn() {
        logContext?.setIsLogged(true);
        navigate("/MaListe")
    }
    const logContext = useContext(LogContext)
    return (
        <Box className={"connexion-container"} >
            <div className={"connexion-form"}>
                <input placeholder={"E-mail"}/>
                <input placeholder={"Mot de passe"}/>
                <button onClick={()=> logIn()

                }>Connexion</button>

            </div>
        </Box>
    );
};

export default Connexion;
