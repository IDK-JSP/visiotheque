import {FC} from 'react';
import {Box} from "@mui/material";
import "../CateItems.css"
const CateItems: FC<{categorie:any}> = ({categorie}) => {
    function filmCate() {
        console.log(categorie.filmes)    }

    return (
            <button onClick={filmCate}>{categorie.name}</button>
    );
};

export default CateItems;
