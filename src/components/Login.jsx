    import React from 'react'
    import logo from '../assets/images/logo.png'
    import { Link } from 'react-router-dom'

    const LoginP = () => {
      return (
        <div className='cx-login'>
          <div className='bdy container'>
          <div className="bdyitem">
          <img src={logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos tempore maxime ducimus deserunt debitis nobis <br /> deleniti possimus autem magni distinctio quae est in placeat itaque veritatis, <br /> praesentium, atque, repellendus illo!</p>
              </div>
        
          </div>
          <div className='form container'>
          
        <form action="">
            <h1>Login</h1>
            <hr />
            <input type="text" placeholder='Enter email'/> <br />
            <input type="text" placeholder='Enter password' /> <br />
            <button>Login</button> <br />
            <p>or</p>
            <p>Click here for <Link>SignUp</Link> </p>


        </form>
          </div>

          {/* SignUP */}
    {/*       
            <div className='form container'>
          
          <form action="">
              <h1>Sign Up</h1>
              <hr />
              <input type="text" placeholder='Enter email'/> <br />
              <input type="text" placeholder='Confirm email'/> <br />
              <input type="text" placeholder='Enter password' /> <br />
              <button>Sign UP</button> <br />
              <p>or</p>
              <p>Click here for <Link>Login</Link> </p>
      
      
          </form>
            </div> */}
        </div>
      )
    }

    export default LoginP
