import {FC} from 'react';
import CateItems from "./CateItems";
import {Box} from "@mui/material";

const cates = [
    {name: "Fiction", filmes: ["Film 1", "Film 2"]},
    {name: "Horreur", filmes: ["Film 1", "Film 3"]}, {name: "Horreur", filmes: ["Film 1", "Film 3"]}, {
        name: "Horreur",
        filmes: ["Film 1", "Film 3"]
    }, {name: "Horreur", filmes: ["Film 1", "Film 3"]}, {name: "Horreur", filmes: ["Film 1", "Film 3"]},
]
const CateList: FC<{}> = ({}) => {
    return (
        <div>
            <Box className={"cate-list"}>

                {cates.map((cate) => (
                    <CateItems categorie={cate}/>
                ))}
            </Box>
        </div>
    );
};

export default CateList;
