import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import Header2 from '../Header/Header2';
import FacebookIcon from '@material-ui/icons/Facebook';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { initLoginFramework, handleGoogleSignIn, handleFBSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword, resetPassword } from './LoginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [newUser, setNewUser] = useState(true);
    const [pass, setPass] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorFirebase, setErrorFirebase] = useState(false);
    const [verifyMsg, setVerifyMsg] = useState(false);
    const [resetPasswordForm, setResetPasswordForm] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        fName: '',
        lName: '',
        email: '',
        password: '',
        cPassword: '',
        error: '',
        success: false
    });

    // Destructuring user state
    const { fName, email, password, error, success } = user;

    // State for user login input data
    const [loginUser, setLoginUser] = useState({
        userEmail: '',
        userPassword: ''
    });
    const { userEmail, userPassword } = loginUser;

    // useEffect(()=> {
    //     setErrorFirebase(error);
    // }, [user])



    // Initialize firebase/login framework
    initLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    // console.log(loggedInUser)

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (res.error !== '') setErrorFirebase(true);
        // Redirect when signed in
        if (redirect) history.replace(from);
        // console.log(user)
        // console.log(loggedInUser)
    }
    // console.log(loggedInUser)

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email, password);

        // Validation on confirm password
        if (pass === confirmPassword) {
            // For new user sign up / create account
            if (newUser && email && password) {
                createUserWithEmailAndPassword(fName, email, password)
                    .then(res => {
                        // console.log(res)
                        handleResponse(res, true);
                        if (res.success) {
                            setVerifyMsg(true)
                        }
                    })
            }
        } else {
            handleError('Oops!..Password not matched. Please try again')
        }

        // For old users sign in / login
        if (!newUser && userEmail && userPassword) {
            signInWithEmailAndPassword(email, password)
                .then(res => {
                    console.log(res.error)
                    handleResponse(res, true);
                })
        }

        // Reset Password for old user
        if (!newUser && userEmail && !userPassword) {
            resetPassword(userEmail)
                .then(res => console.log('ok'))
        }

    }

    const handleError = (msg, duraction = 5000) => {
        setErrorMessage(msg);
        // Disable message button after 5 seconds automatically
        setInterval(() => {
            setErrorMessage('');
        }, duraction)
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        // console.log(e.target.name, e.target.value)
        // Email validation with Regex
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
            if (!isFieldValid) {
                handleError('Please enter a valid email.', 5000)
            }
        }

        // Password validation with Regex
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6
            const hasNumber = /\d{1}/.test(e.target.value);
            setPass(e.target.value);
            isFieldValid = isPasswordValid && hasNumber;
            if (!isFieldValid) {
                handleError('Password must be 1 char, 1 latter and 7 length', 10000)
            }
        }

        if (e.target.name === 'cPassword') {
            const isPasswordValid = e.target.value.length > 6
            const hasNumber = /\d{1}/.test(e.target.value);
            setConfirmPassword(e.target.value);
            isFieldValid = isPasswordValid && hasNumber;
            if (pass !== confirmPassword) {
                handleError('Oops...! Password is not matched. Continue trying', 10000)
            }
        }

        // // Validation on userEmail when user login
        // if (e.target.name === 'userEmail') {
        //     isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        //     if (!isFieldValid) {
        //         handleError('Please enter a valid email.', 3000)
        //     }
        // }

        // // Validation on userPassword when user login
        // if (e.target.name === 'userPassword') {
        //     const isPasswordValid = e.target.value.length > 6
        //     const hasNumber = /\d{1}/.test(e.target.value);
        //     setPass(e.target.value);
        //     isFieldValid = isPasswordValid && hasNumber;
        //     if (!isFieldValid) {
        //         handleError('Password must be 1 char, 1 latter and 7 length', 3000)
        //     }
        // }

        // Update user state
        if (isFieldValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }

        // Update loginUser input data state to login
        if (e.target.name === 'userEmail' || e.target.name === 'userPassword') {
            const userInfo = { ...loginUser }
            userInfo[e.target.name] = e.target.value;
            setLoginUser(userInfo);
        }

    }
    console.log(errorFirebase)
    return (
        <Container>
            <Header2 />
            {
                errorFirebase
                &&
                <Form.Group>
                    <Button className="w-100" variant="outline-danger"> {error} </Button>
                </Form.Group>
            }
            <Form className="login-form" onSubmit={handleSubmit}>
                {
                    errorMessage !== ''
                    && <Form.Group>
                        <Button className="w-100" variant="outline-danger"> {errorMessage} </Button>
                    </Form.Group>
                }
                {/* <p style={{ color: 'red' }}> {error} </p> */}
                {
                    success
                    && <p style={{ color: 'green' }}> User  {newUser ? 'created' : 'logged in'} successfully. </p>
                }

                {
                    newUser
                        ? <>
                            <h3>Create an account</h3>
                            <Form.Group>
                                <Form.Control onBlur={handleBlur} name="fName" type="text" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control onBlur={handleBlur} name="lName" type="text" placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control onBlur={handleBlur} name="email" type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control onBlur={handleBlur} name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control onBlur={handleBlur} name="cPassword" type="password" placeholder="Confirm Password" />
                            </Form.Group>
                            <Button className="w-100" variant="warning" type="submit">
                                Create an account
                            </Button>
                            <Form.Text className="text-muted text-center">
                                Already have an account? <button onClick={() => setNewUser(!newUser)} style={{ border: 'none', background: 'none', color: 'orange' }}>Login</button>
                            </Form.Text>
                        </>
                        :
                        !resetPasswordForm
                            ?
                            <>
                                <h3>Login</h3>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} type="text" name="userEmail" placeholder="Username or Email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} type="password" name="userPassword" placeholder="Password" />
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Text className="text-right">
                                            <button onClick={() => setResetPasswordForm(!resetPasswordForm)} className="reset-password-btn">Forgot Password</button>
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
                                <h3>Reset Password</h3>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} type="text" name="userEmail" placeholder="Email" />
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Text className="text-left">
                                            If you remember password, try login
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Text className="text-right">
                                            <button onClick={() => setResetPasswordForm(!resetPasswordForm)} className="reset-password-btn">Login</button>
                                        </Form.Text>
                                    </Form.Group>
                                </Form.Row>
                                <Button className="w-100" variant="warning" type="submit">
                                    Reset Password
                            </Button>
                                <Form.Text className="text-muted text-center">
                                    Don't have an account? <button onClick={() => setNewUser(!newUser)} style={{ border: 'none', background: 'none', color: 'orange' }}>Create an account</button>
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