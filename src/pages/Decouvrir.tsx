import {FC} from 'react';
import CateItems from "../component/CateItems";
import {Box} from "@mui/material";
import "../CateItems.css"

const cates = [
    {name: "Fiction", filmes: ["Film 1", "Film 2"]},
    {name: "Horreur", filmes: ["Film 1", "Film 3"]}, {name: "Horreur", filmes: ["Film 1", "Film 3"]}, {
        name: "Horreur",
        filmes: ["Film 1", "Film 3"]
    }, {name: "Horreur", filmes: ["Film 1", "Film 3"]}, {name: "Horreur", filmes: ["Film 1", "Film 3"]},
]
const Discover: FC<{}> = ({}) => {
    return (
        <div className={"discover"}>
            <input placeholder={"Rechercher"}/>
            <Box className={"cate-list"}>

                {cates.map((cate) => (
                    <CateItems categorie={cate}/>
                ))}
            </Box>
        </div>
    );
};

export default Discover;
