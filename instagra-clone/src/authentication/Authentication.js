import React from 'react'
import './Authentication.css'
import Login from './Login'

function Authentication() {
  return (
    <div className='authentication'>Authentication
    <div className="auth__left"></div>
    <img src="https://i.imgur.com/P3Vm1Kq.png" alt="" />
    <div className="auth__right">
      <Login/>
      <div className="auth__more">
        <span>
          Don't have an account? <button>Sign up</button>
          </span>
        </div>
        </div>   
     </div>
  )
}

export default Authentication