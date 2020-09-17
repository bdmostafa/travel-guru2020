import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';

const Header2 = () => {
    return (
        <Navbar bg="white" expand="lg" variant="light" className="mb-5">
            <Navbar.Brand href="#home"> 
                <Link to={`/home`}>
                 <img className="w-25" src={logo} alt="" />
                 </Link> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="mr-3" href="#home">News</Nav.Link>
                    <Nav.Link className="mr-3" href="#link">Destination</Nav.Link>
                    <Nav.Link className="mr-3" href="#link">Blog</Nav.Link>
                    <Nav.Link className="mr-3" href="#link">Contact</Nav.Link>
                    <Button className="login-btn font-weight-bold" variant="warning">
                        <Link to={`/login`}>
                            Login
                        </Link>
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header2;