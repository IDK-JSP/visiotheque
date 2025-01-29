import { FC, useState } from "react";
import "../css/connexion.css";
import { Box } from "@mui/material";
import { postVisiotheque } from "../api/api";

const Inscription: FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm,setConfirm]= useState("")

    const registerUser = (email: string, password: string) => {
        if (password === confirm && email != "" && password !=""){
        const data = {
            email: email,
            password: password
        };
        const test = postVisiotheque("/users", data);
        console.log(test);
        }else{
            console.log("pas le même mot de passe")
        }
    };

    return (
        <Box className="connexion-container">
            <div className="connexion-form">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                />
                <Box className="password-form">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mot de passe"
                    />
                    <input
                        type="password"
                        value={confirm}
                        onChange={(e)=>setConfirm(e.target.value)}
                        placeholder="Confirmer le mot de passe" />
                </Box>
                <button onClick={() => registerUser(email, password)}>Inscription</button>
            </div>
        </Box>
    );
};

export default Inscription;
