import {FC} from 'react';
import {useNavigate} from "react-router";
const buttons = [
    {name: "Acceuil", path: "/Home"},
    {name: "Decouvrir", path: "/Discover"},
    {name: "Ma liste", path: "/MaListe"},
    {name: "Profil", path: "/Profile"},
]
const NavBar: FC<{}> = ({}) => {
    let navigate = useNavigate();
    return (
        <div className={"AppBar"}>
            {buttons.map((button) =>
                <button onClick={() => navigate(button.path)}>{button.name}</button>
            )}
            <input className={"test"}/>
        </div>
    );
};

export default NavBar;
