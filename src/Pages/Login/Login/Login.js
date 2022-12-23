import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { logIn } = useContext( AuthContext );

    const handleLogInSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, password );

        logIn( email, password )
.then(result => {
    const user = result.user;
    console.log(user);
    form.reset();
})

    }

    return (
        <Form onSubmit={handleLogInSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
                <Form.Text className="text-danger">
                    {/* We'll never share your email with anyone else. */}
                </Form.Text>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;