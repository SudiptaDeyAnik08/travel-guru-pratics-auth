import React, { useContext } from 'react'
import './Login.css'
import Form from 'react-bootstrap/Form';
import { Button, Col } from 'react-bootstrap';
import { FaGoogle } from "react-icons/fa6";
import { Navigate } from "react-router-dom";
import { AuthProvider } from '../ContextAPi/ContextAPiAuth';
import { GoogleAuthProvider } from "firebase/auth";

function Login() {

    const { signInUser,signWithGoogle } = useContext(AuthProvider)
    const googleProvider = new GoogleAuthProvider();
    const hendleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const handelLoginWithGoogle =(e)=>{
        signWithGoogle(googleProvider)
        .then(result=>{
            console.log(result);
        })
        .catch(error =>{
            console.error(error)
        })

    }
    

    return (
        <div className='loginBag'>
            <Form className='form' onSubmit={hendleLogin}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" className="usernameInput" placeholder="Enter Username or Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className="usernameInput"  name="password" placeholder="Password" />
                </Form.Group>

                <Col xs="auto" className="my-1">
                    <Form.Check
                        type="checkbox"
                        id="autoSizingCheck2"
                        label="Remember me"
                    />
                </Col>
                <Button type='submit bg-success'>Submit</Button>
            </Form>
            <div className='loginWithOther'>
                <hr />
                <button className='w-100 rounded p-2' onClick={handelLoginWithGoogle}>
                    <FaGoogle></FaGoogle> Countinue With Google
                    {/* <Navigate to="/dashboard"></Navigate> */}
                </button>

            </div>
        </div>
    )
}

export default Login