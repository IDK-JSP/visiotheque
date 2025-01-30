// Définir le type des props du composant AddListButton
import {FC} from "react";
import {postVisiotheque} from "../api/api";
import "../css/AddListButton.css"


const AddListButton: FC<{ movie_id: number, title: string, poster_path: string }> = ({
                                                                                         movie_id,
                                                                                         title,
                                                                                         poster_path
                                                                                     }) => {
    // Logique du bouton, par exemple l'ajout à une liste
    const registerMovie = () => {
        const data = {
            movie_id:movie_id,
            title:title,
            poster_path:poster_path
        }
        const test = postVisiotheque("/movie", data);
        console.log(test);
    };
    return (
        <button className={"add-list"} onClick={()=>registerMovie()}>
            +
        </button>
    );
};

export default AddListButton;
