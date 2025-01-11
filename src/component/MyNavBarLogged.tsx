import React, {FC, useContext} from 'react';
import {useNavigate} from "react-router";
import {Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";
import "../css/App.css";
import {LogContext} from "../App";

const buttons = [
    {name: "Acceuil", path: "/Home"},
    {name: "Decouvrir", path: "/Discover"},
    {name: "Ma liste", path: "/MaListe"},
];

const NavBarLogged: FC<{}> = ({}) => {
    const logContext = useContext(LogContext)
    let navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const pages = [{name: "Déconnexion", path: "/Home"}];

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div className={"AppBar"}>
            {buttons.map((button) =>
                <button onClick={() => navigate(button.path)} key={button.name}>{button.name}</button>
            )}
            <Box sx={{flexGrow: 0}}>
                <Tooltip title="Profile">
                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{mt: '45px'}}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {pages.map((page) => (
                        <MenuItem onClick={() => {
                            handleCloseUserMenu();
                            logContext?.setIsLogged(false);
                            navigate(page.path);
                        }} key={page.name}>
                            <Typography sx={{textAlign: 'center'}}><b>{page.name}</b></Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </div>
    );
};

export default NavBarLogged;
