import {FC} from 'react';
import {Outlet} from "react-router";
import MynavBar from "../component/MynavBar";

const NotLogged: FC<{}> = ({}) => {
    // @ts-ignore
    return (
        <div>
            <MynavBar/>
            <Outlet/>
        </div>
    );
};

export default NotLogged;
