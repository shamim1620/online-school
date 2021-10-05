import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Manubar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home"><i class="fas fa-graduation-cap"></i> <span className="text-warning">Online School</span></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/Services">Services</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Manubar;