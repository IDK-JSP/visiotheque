import {FC} from 'react';
import {Outlet} from "react-router";
import MynavBar from "../component/MynavBar";

const Logged: FC<{}> = ({}) => {
    return (
        <div>
            <MynavBar/>
            <Outlet/>
        </div>
    );
};

export default Logged;
