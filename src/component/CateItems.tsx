import {FC} from 'react';
import "../css/CateItems.css"
import {useNavigate} from "react-router";


const CateItems: FC<{categorie:any}> = ({categorie}) => {
const navigate = useNavigate(); // Utilisation du hook useNavigate
    function filmCate() {
        console.log(categorie.filmes)
    }


    return (
            <button onClick={() => navigate("/Category/" + categorie.id)}>{categorie.name}</button>
    );
};

export default CateItems;
