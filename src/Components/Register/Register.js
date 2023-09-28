import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import { Link } from 'react-router-dom';
import './Register.css'
import ContextAPiAuth, { AuthProvider } from '../ContextAPi/ContextAPiAuth';

function Register() {

    const {createUser} = useContext(AuthProvider)
    const [accpted, setAccepted] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo_url = form.photo_url.value;
        const password = form.password.value;

        console.log(form, name, email, photo_url, password)

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset()
        })
        .catch(e=> console.error(e))
    }

    const handleUpdateProfile = (name, photo_url) => {

    }


    const handleAccepted = (e) => {
        console.log(e.target.checked);
        setAccepted(e.target.checked)
    }

    return (
        <div className='loginBag '>
            <Form onSubmit={handleSubmit} className=' form1'>
                <Row className="align-items-center d-block">

                    <Col sm={3} className="my-1 mb-3 w-100">
                        <h5 className='pb-1'>Enter Your Name</h5>
                        <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                            Name
                        </Form.Label>
                        <Form.Control name='name' id="inlineFormInputName" placeholder="Your Name" />
                    </Col>

                    <Col sm={3} className="my-1 mb-3 w-100">
                        <h5 className='pb-1'>Enter Your Photo URL</h5>
                        <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                            Photo URL
                        </Form.Label>
                        <Form.Control type='text' name='photo_url' id="inlineFormInputName" placeholder="sudipta@gmail.com" />
                    </Col>

                    <Col sm={3} className="my-1 mb-3 w-100">
                        <h5 className='pb-1'>Enter Your Email</h5>
                        <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                            Email
                        </Form.Label>
                        <Form.Control name="email" type="email" id="inlineFormInputName" placeholder="sudipta@gmail.com" />
                    </Col>


                    <Col sm={3} className="my-1 w-100 mb-4">
                        <h5 className='pb-1'>Enter Your Password</h5>
                        <Form.Label name='password' type='password' htmlFor="inlineFormInputName" visuallyHidden>
                            Password
                        </Form.Label>
                        <Form.Control name="password" id="inlineFormInputName" placeholder="********" />
                    </Col>


                    <Col xs="auto" className="my-1">
                        <Form.Check
                            type="checkbox"
                            id="autoSizingCheck2"
                            onClick={handleAccepted}
                            label={<>Accept <Link to='/termsAndConditon'>Terms and Condition</Link> </>}
                        />
                    </Col>

                    <Col xs="auto" className="my-1">
                        <Button type="submit" disabled={!accpted}>Submit</Button>
                    </Col>

                    <Col xs="auto" className="my-1">
                        <h5 className='text-danger mt-4'>{ }</h5>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Register