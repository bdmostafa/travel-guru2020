import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Header2 from '../Header/Header2';
import FacebookIcon from '@material-ui/icons/Facebook';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const Login = () => {
    return (
        <Container>
            <Header2 />
            <Form className="login-form">

                <h3>Create an account</h3>
                <Form.Group>
                    <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button className="w-100" variant="warning" type="submit">
                    Create an account
                </Button>
                <Form.Text className="text-muted text-center">
                    Already have an account? <a href="#">Login</a>
                </Form.Text>


                <h3>Login</h3>
                <Form.Group>
                    <Form.Control type="text" placeholder="Username or Email" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className="w-100" variant="warning" type="submit">
                    Login
                </Button>
                <Form.Text className="text-muted text-center">
                    Don't have an account? <a href="#">Create an account</a>
                </Form.Text>



            </Form>
            <div className="signin-btn">
                Or <br />
                <Button variant="outline-secondary"> <FacebookIcon /> Continue with Facebook</Button> <br />
                <Button variant="outline-secondary"> <AlternateEmailIcon /> Continue with Google</Button>
            </div>
        </Container>
    );
};

export default Login;