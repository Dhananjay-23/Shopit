import React from 'react'
import Welcome from './Welcome.png'

export default function Account() {
  return (
    <React.Fragment>
    <div className='details'>
    <img src={Welcome}></img>
      <h3>Personal Details</h3>
      <input className="inp" type='email' placeholder='E-Mail' required onInvalid={"alert('This is a required field');"}/>
      <input type='text' placeholder='Name' required onInvalid={"alert('This is a required field');"}/>
      <input type='tel' placeholder='Mobile Number' required pattern='[0-9]{10}' onInvalid={"alert('This is a required field');"}/>
      <input type='password' placeholder='Password' required onInvalid={"alert('This is a required field');"}/>
      <input type='password' placeholder='Confirm Password' required onInvalid={"alert('This is a required field');"}/>
      <button>Create Account</button>
    </div>
    </React.Fragment>
  )
}
