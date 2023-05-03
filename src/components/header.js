import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
//added
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    //changed
                    <NavLink to="/" className="text-decoration-none text-light mx-2">Todo</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/home" className="text-decoration-none text-light mx-2">Home</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light">Features</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
