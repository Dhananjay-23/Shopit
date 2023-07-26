import React from 'react'
import logo from "./shopit.png"
import {Link} from "react-router-dom"

function login() {
  return (
    <React.Fragment>
    <div className='loginpage'>
        <div className='cntnt'>
            <h4>
                Login to your Account
            </h4>
            <img src={logo} alt='SHOPIT' height="70px" width = "140px" />
            <input type='email' placeholder='E-mail' />
            <input type='password' placeholder='Password' />
            <button>LOGIN</button>
            <Link to="/createAccount" >Don't have an account? Create one</Link>
        </div>
        </div>
    </React.Fragment>
  )
}
export default login;