import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavigationBar.css'
import logo from '../../assets/travel-guru-resources-main/logo.png'
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navigationBackground d-flex justify-content-around" >
      <div><Image src={logo} className='image_logo' /></div>
      <div>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </div>
      <div className=''>
        <Link className='p-3 linkings' to="/news" >News</Link>
        <Link className='p-3 linkings' to="/destination" >Destination</Link>
        <Link className='p-3 linkings' to="/blog" >Blog</Link>
        <Link className='p-3 linkings' to="/contact" >Contact</Link>
      </div>
      <div >
        <button className='loginButton'> <Link to='/login'>Login</Link> </button>
        <button className='loginButton ms-3'> <Link to='/register'>Register</Link> </button>
      </div>
    </Navbar>
  )
}

export default NavigationBar