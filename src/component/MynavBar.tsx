import React, {FC} from 'react';
import {useNavigate} from "react-router";
import {Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";
import "../App.css";

const buttons = [
    {name: "Acceuil", path: "/Home"},
    {name: "Decouvrir", path: "/Discover"},
    {name: "Ma liste", path: "/MaListe"},
];

const NavBar: FC<{}> = ({}) => {
    let navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const pages = [{name: "Connexion", path: "/Connexion"},
        {name: "Inscription",path: "/Inscription"}];

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
                            navigate(page.path);
                            handleCloseUserMenu();
                        }} key={page.name}>
                            <Typography sx={{textAlign: 'center'}}>{page.name}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </div>
    );
};

export default NavBar;
