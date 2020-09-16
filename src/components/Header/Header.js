import React from 'react';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import logo from '../../images/Logo.png';
// import SearchIcon from '@material-ui/icons/Search';

const Header = () => {

    return (
        <Navbar bg="none" expand="lg" variant="dark" className="mb-5">
            <Navbar.Brand href="#home"> <img className="logo" src={logo} alt="" /> </Navbar.Brand>
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
                    <Button className="login-btn font-weight-bold" variant="warning">Login</Button>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;