import React,{useRef} from 'react'
import {Card,Button,Form} from 'react-bootstrap';

const Signup = () => {
    const emailRef=useRef();
    const passwordRef=useRef();
    const passwordConfirmRef=useRef();
    return (
        <>
            <Card>
                <Card.Body>
                 <h2 className="text-center mb-4">Sign up</h2>
                <Form>
                    <Form.Group id="email" className="mt-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required  placeholder="Email"></Form.Control>
                    </Form.Group>
                    <Form.Group id="password" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required placeholder="Password"></Form.Control>
                    </Form.Group>
                    <Form.Group id="password-confirm" className="mt-3">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required placeholder="Confirm Password"></Form.Control>
                    </Form.Group>
                    <Button type="submit" className="w-100 mt-2">Sign Up</Button>
                </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log In
            </div>
        </>
    )
}

export default Signup
