import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
<div className='cx-footer bg-dark'>
    <div className="wrapper container">
     <div className="f-first">
        <h4>About</h4>
        <img src={logo} alt="logo" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo recusandae provident alias dolore voluptatum nam. Laboriosam asperiores iure voluptatum quaerat hic nemo aliquid dicta iusto perspiciatis libero, aliquam nostrum vero.</p>
     </div>
      <div className="f-second">
        <h4>Pages</h4>
        
         <div className='mb-3'><Link>Home</Link></div>
        <div className='mb-3'><Link>All Products</Link></div>
        <div className='mb-3'><Link>Category</Link></div>
        <div><Link>About</Link></div>
       
      </div>
      <div className="f-thiird" >
        <h4>Contact</h4>
          <div className='d-flex text-light mb-2' >
            <span className='me-2'><FaLocationArrow /></span>
            <span>AutoNagar,GousiyaMasjid,<br />Nizamabad 503001</span>
          </div>
          <div className='d-flex text-light mb-2' >
            <span className='me-2'><FaMobileAlt /></span>
            <span>+91 9440998942</span>
          </div>
          <div className='d-flex text-light' >
            <span className='me-3'><MdEmail/></span>
            <span>onlineshopping@gmail.com</span>
          </div>
      </div>
    </div>
</div>
  )
}

export default Footer
