import React from 'react';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';
// import SearchIcon from '@material-ui/icons/Search';

const Header = () => {

    return (
        <Navbar bg="none" expand="lg" variant="dark" className="mb-5">
            <Navbar.Brand >
                <Link to='/home'>
                    <img className="w-25 logo-bg" src={logo} alt="" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className="search-form">
                    <FormControl type="text" placeholder="Search your destination" className="mr-sm-2 input-search" />
                    {/* <SearchIcon /> */}
                </Form>
                <Nav className="mr-auto">
                    <Nav.Link>News</Nav.Link>
                    <Nav.Link>Destination</Nav.Link>
                    <Nav.Link>Blog</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    <Link to='/login'>
                        <Button className="login-btn font-weight-bold" variant="warning">
                            Login
                        </Button>
                    </Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;