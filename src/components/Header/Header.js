import React, { useContext } from 'react';
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleSignOut } from '../Login/LoginManager';

const Header = ({ currentUser }) => {
    const {loggedUser, userState, verifyLink} = useContext(UserContext);
    const [user, setUser] = userState;
    const [loggedInUser, setLoggedInUser] = loggedUser;
    const [verifyMsg, setVerifyMsg] = verifyLink;

    const signOut = () => {
        handleSignOut()
        .then(res => {
            setUser(res);
            setLoggedInUser(res);
        })
    }


    return (
        <>
        <Navbar bg="none" expand="lg" variant="dark" className="mb-5">
            <Navbar.Brand className="w-25">
                <Link to='/home'>
                    <img className="logo-bg" src={logo} alt="" />
                </Link>

            </Navbar.Brand>
            <Nav>
                <Form className="search-form">
                    <FormControl type="text" placeholder="Search your destination" className="mr-sm-2 input-search" />
                </Form>
            </Nav>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >

                <Nav className="mr-auto ml-5">
                    <Nav.Link>News</Nav.Link>
                    <Nav.Link>Destination</Nav.Link>
                    <Nav.Link>Blog</Nav.Link>
                    <Nav.Link>Contact</Nav.Link>
                    {
                        currentUser
                            ? <>
                                <strong style={{ marginTop: '.5rem', color: 'white' }}>{currentUser}</strong>
                                <Link to='/'>
                                    <Button onClick={() => signOut()} className="login-btn font-weight-bold" variant="warning">
                                        Sign Out
                                    </Button>
                                </Link>
                            </>
                            : <Link to='/login'>
                                <Button className="login-btn font-weight-bold" variant="warning">
                                    Login
                                </Button>
                            </Link>

                    }
                </Nav>

            </Navbar.Collapse>
        </Navbar>
        {
            verifyMsg
            && <Button className="w-100 mb-5" variant="outline-success"> Verification link is sent to your mail. Please check it out. Thanks! </Button>
        }
        </>
    );
};

export default Header;