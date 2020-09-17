import React, { useState, useContext } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import Header2 from '../Header/Header2';
import FacebookIcon from '@material-ui/icons/Facebook';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { initLoginFramework, handleGoogleSignIn, handleFBSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    // Destructuring user state
    const { isSignedIn, name, email, password } = user;
    // console.log(isSignedIn)

    // Initialize firebase/login framework
    initLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        console.log(res)
        // Redirect when signed in
        if (redirect) history.replace(from);
    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const fbSignIn = () => {
        handleFBSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    // const signOut = () => {
    //     handleSignOut()
    //         .then(res => {
    //             handleResponse(res, false);
    //         })
    // }

    const resetPassword = () => {
        console.log('password reset')
    }

    const handleSubmit = (e) => {
        // console.log(user.email, user.password);

        // For new user
        if (newUser && email && password) {
            createUserWithEmailAndPassword(name, email, password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        // For old users
        if (!newUser && email && password) {
            signInWithEmailAndPassword(email, password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }

    const handleBlur = (e) => {
        // console.log(e.target.value)
        let isFieldValid = true;

        // Email validation with Regex
        if (e.target.name === 'email') {
            // isFieldValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value)
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
            // console.log(isFieldValid);
        }

        // Password validation with Regex
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6
            const hasNumber = /\d{1}/.test(e.target.value);
            setNewPassword(e.target.value);
            isFieldValid = isPasswordValid && hasNumber;
        }

        if (e.target.name === 'confirm_password') {
            const isPasswordValid = e.target.value.length > 6
            const hasNumber = /\d{1}/.test(e.target.value);
            setNewPassword(e.target.value);
            const isPasswordMatched = newPassword !== e.target.value;
            console.log(isPasswordMatched)
            isFieldValid = isPasswordValid && hasNumber && isPasswordMatched;
        }

        // Update user state
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }

    }

    return (
        <Container>
            <Header2 />
            <Form className="login-form" onSubmit={handleSubmit}>
                {
                    newUser
                        ? <>
                            <h3>Login</h3>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Username or Email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Text className="text-right">
                                        <button onClick={() => resetPassword()} className="reset-password-btn">Forgot Password</button>
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                            <Button className="w-100" variant="warning" type="submit">
                                Login
                        </Button>
                            <Form.Text className="text-muted text-center">
                                Don't have an account? <button onClick={() => setNewUser(!newUser)} style={{ border: 'none', background: 'none', color: 'orange' }}>Create an account</button>
                            </Form.Text>
                        </>
                        :
                        <>
                            <h3>Create an account</h3>
                            <Form.Group>
                                <Form.Control type="text" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control onBlur={handleBlur} type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control onBlur={handleBlur} name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control onBlur={handleBlur} name="confirm_password" type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <Button className="w-100" variant="warning" type="submit">
                                Create an account
                        </Button>
                            <Form.Text className="text-muted text-center">
                                Already have an account? <button onClick={() => setNewUser(!newUser)} style={{ border: 'none', background: 'none', color: 'orange' }}>Login</button>
                            </Form.Text>
                        </>
                }

            </Form>
            <div className="signin-btn">
                Or <br />
                <Button onClick={fbSignIn} variant="outline-secondary"> <FacebookIcon /> Continue with Facebook</Button> <br />
                <Button onClick={googleSignIn} variant="outline-secondary"> <AlternateEmailIcon /> Continue with Google</Button>
            </div>
        </Container>
    );
};

export default Login;