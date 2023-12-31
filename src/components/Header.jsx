import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png'
import { FaSearch, FaRegHeart, FaShoppingCart   } from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';
import img from '../assets/images/iphone.webp'
const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='cx-header'> 
          <Navbar expand="lg" className="bg-dark" >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="log" className='img-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">All Products</Nav.Link>
            <Nav.Link href="#home">Category</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          
          </Nav>
          <div className='right-header'>
            <button className='icon-btn' onClick={handleShow}><FaSearch /></button>
            <button className='icon-btn'><FaRegHeart /></button>
            <button className='icon-btn'><FaShoppingCart /></button>
            <button className='btn btn-danger'>Logout</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Offcanvas show={show} onHide={handleClose} placement='bottom'>
        <Offcanvas.Header closeButton>
         <input type="text" placeholder='search here...' className='form-control' />
        </Offcanvas.Header>
        <Offcanvas.Body>
         <div className="search-wrapper container">
          <div className="search-item mb-3">
            <div className="s-left">
            <img src={img} alt="img" />
            </div>
            <div className="s-right">
              <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, atque?</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, maxime? Nesciunt saepe facilis, blanditiis vero voluptatibus, quam odit tenetur odio suscipit dolor recusandae quos. Consequuntur error corporis voluptatum sed sint.</p>
            </div>
          </div>
          <div className="search-item mb-3">
            <div className="s-left">
            <img src={img} alt="img" />
            </div>
            <div className="s-right">
              <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, atque?</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, maxime? Nesciunt saepe facilis, blanditiis vero voluptatibus, quam odit tenetur odio suscipit dolor recusandae quos. Consequuntur error corporis voluptatum sed sint.</p>
            </div>
          </div>
          <div className="search-item mb-3">
            <div className="s-left">
            <img src={img} alt="img" />
            </div>
            <div className="s-right">
              <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, atque?</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, maxime? Nesciunt saepe facilis, blanditiis vero voluptatibus, quam odit tenetur odio suscipit dolor recusandae quos. Consequuntur error corporis voluptatum sed sint.</p>
            </div>
            
          </div>
          <div className="search-item mb-3">
            <div className="s-left">
            <img src={img} alt="img" />
            </div>
            <div className="s-right">
              <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, atque?</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, maxime? Nesciunt saepe facilis, blanditiis vero voluptatibus, quam odit tenetur odio suscipit dolor recusandae quos. Consequuntur error corporis voluptatum sed sint.</p>
            </div>
            
            
          </div>
          <div className="search-item mb-3">
            <div className="s-left">
            <img src={img} alt="img" />
            </div>
            <div className="s-right">
              <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, atque?</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, maxime? Nesciunt saepe facilis, blanditiis vero voluptatibus, quam odit tenetur odio suscipit dolor recusandae quos. Consequuntur error corporis voluptatum sed sint.</p>
            </div>
            
            
          </div>
          <div className="search-item mb-3">
            <div className="s-left">
            <img src={img} alt="img" />
            </div>
            <div className="s-right">
              <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, atque?</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, maxime? Nesciunt saepe facilis, blanditiis vero voluptatibus, quam odit tenetur odio suscipit dolor recusandae quos. Consequuntur error corporis voluptatum sed sint.</p>
            </div>
            
            
          </div>
          
         </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Header
