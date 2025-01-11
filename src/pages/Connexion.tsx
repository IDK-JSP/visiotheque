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
        <Box sx={{display:"flex",height:"80vh", justifyContent: "center", alignItems: "center"}}>
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
