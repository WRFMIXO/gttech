import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { IconButton, Toolbar, InputBase, InputAdornment } from "@mui/material";
import { Menu as MenuIcon, Fullscreen, Notifications, Brightness3, Mail, AccountCircle, LogoutRounded, Search } from "@mui/icons-material";

const ClientNavbar = () => {
    
    return(
        <Navbar bg="light" variant="light" className="clientNavbar">
            <Container fluid>
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <MenuIcon className="clientNavbarIcons" />
                    </IconButton>

                    <div className="ms-auto">

                        <InputBase 
                            placeholder="Faites une recherche ..."
                            startAdornment = {
                                <InputAdornment position="start">
                                    <Search className="navbar-icons" color="inherit"/>
                                </InputAdornment>
                            }
                            style={{ width: "600px", marginLeft: "300px"}}
                        />


                        <IconButton color="inherit">
                            <Fullscreen className="navbar-icons"/>
                        </IconButton>

                        <IconButton color="inherit">
                            <Notifications className="navbar-icons"/>
                        </IconButton>

                        <IconButton color="inherit">
                            <Brightness3 className="navbar-icons"/>
                        </IconButton>

                        <IconButton color="inherit">
                            <Mail className="navbar-icons"/>
                        </IconButton>

                        <IconButton color="inherit">
                            <AccountCircle className="navbar-icons"/>
                        </IconButton>

                        <IconButton color="inherit">
                            <LogoutRounded className="navbar-icons" color="secondary"/>
                        </IconButton>

                    </div>
                </Toolbar>
            </Container>
        </Navbar>
    );
};

export default ClientNavbar;