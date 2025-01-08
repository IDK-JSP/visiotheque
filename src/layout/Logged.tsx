import {FC} from 'react';
import {Outlet} from "react-router";
import MynavBar from "../component/MynavBar";
import MyNavBarLogged from "../component/MyNavBarLogged";

const Logged: FC<{}> = ({}) => {
    return (
        <div>
            <MyNavBarLogged/>
            <Outlet/>
        </div>
    );
};

export default Logged;
