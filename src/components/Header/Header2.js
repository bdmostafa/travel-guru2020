import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { handleSignOut } from '../Login/LoginManager';

const Header2 = ({ currentUser }) => {
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
        <Navbar bg="white" expand="lg" variant="light" className="mb-5">
            <Navbar.Brand>
                <Link to='/home'>
                    <img className="w-25" src={logo} alt="" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="w-100" id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="mr-3">News</Nav.Link>
                    <Nav.Link className="mr-3">Destination</Nav.Link>
                    <Nav.Link className="mr-3">Blog</Nav.Link>
                    <Nav.Link className="mr-3">Contact</Nav.Link>
                    {
                        currentUser
                            ? <>
                                <strong style={{ marginTop: '.5rem', color: 'black' }}>{currentUser}</strong>
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

export default Header2;