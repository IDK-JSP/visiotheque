import {FC} from 'react';
import CateItems from "../component/CateItems";
import {Box} from "@mui/material";
import "../CateItems.css"
import Recherche from "../component/Recherche";
import CatList from "../component/CatList";


const Discover: FC<{}> = ({}) => {
    return (
        <div className={"discover"}>
            <Recherche/>
        </div>
    );
};

export default Discover;
