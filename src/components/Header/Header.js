import React from 'react';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';
// import SearchIcon from '@material-ui/icons/Search';

const Header = () => {

    return (
        <Navbar bg="none" expand="lg" variant="dark" className="mb-5">
            <Navbar.Brand href="#home">
                <Link to={`/home`}>
                    <img className="w-25" src={logo} alt="" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className="search-form">
                    <FormControl type="text" placeholder="Search your destination" className="mr-sm-2 input-search" />
                    {/* <SearchIcon /> */}
                </Form>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">News</Nav.Link>
                    <Nav.Link href="#link">Destination</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
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

export default Header;