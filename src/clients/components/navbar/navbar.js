import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { IconButton, Toolbar } from "@mui/material";
import { MenuIcon } from "@mui/icons-material";

const ClientNavbar = () => {
    const [search, setSearch] = useState("");
    
    return(
        <Navbar bg="light" variant="light" className="clientNavbar">
            <Container fluid>
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <MenuIcon className="clientNavbarIcons" />
                    </IconButton>
                </Toolbar>
            </Container>
        </Navbar>
    );
};

export default ClientNavbar;