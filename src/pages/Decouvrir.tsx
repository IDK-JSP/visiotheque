import {FC} from 'react';
import "../css/CateItems.css"
import Recherche from "../component/Recherche";


const Discover: FC<{}> = ({}) => {
    return (
        <div className={"discover"}>
            <Recherche/>
        </div>
    );
};

export default Discover;
