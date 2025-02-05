import {FC, useContext, useState} from 'react';
import "../css/connexion.css"
import {Box} from "@mui/material";
import {LogContext} from "../App";
import {useNavigate} from "react-router";
import {postVisiotheque} from "../api/api";

const Connexion: FC<{}> = ({}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const logIn = async () => {
        const data = {
            email: email,
            password: password
        };


        try {
            // Attente de la réponse de la requête login
            const response = await postVisiotheque("/auth/login", data);

            // Vérifie si la réponse contient le token
            if (response) {
                console.log(response);  // Le token est directement ici (tu peux aussi vérifier `response.token`)
                logContext?.setIsLogged(true);  // Mettre à jour l'état de la connexion
            }
        } catch (error) {
            console.error("Erreur de login:", error);
        }
    };


    const logContext = useContext(LogContext)
    return (
        <Box className={"connexion-container"}>
            <div className={"connexion-form"}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                />
                <button onClick={() => logIn()

                }>Connexion
                </button>

            </div>
        </Box>
    );
};

export default Connexion;
