import React from 'react'
import './App.css'
import {Link } from 'react-router-dom'
 
function App() {
  return (
      <div className="container">
        <div className="header">
          <img src="logo.png" alt="Error" className="icon"></img>
          <div className="icontext"><span>Job</span> Portal</div>
          <img src="user.png" alt="SignIN" className="signicon" />
          <div className="signtext">
            <Link to="/login" >Sign In</Link>
            </div>
        </div>
        <div className="content">
          <div className="text1">India's #1 Job Portal</div>
          <div className="text2">find your dream job  today</div>
          <div className="text3">Search</div>
          <div className="searchbar">
            <input type="text" name="" id="" className='searchskill' placeholder='Search for "Skills"' />
            <input type="text" name="" id="" className='searchloc' placeholder='Location'/>
            <button className='searchbtn'>Search</button>
          </div>
        </div>
        <div className="footer">
          <div className="foottext">
            Copyright @2025. All Rights are Reserved.
          </div>
          <div>
          <img src="facebook.png" alt="Error" className="socialicon" />
          <img src="linkedin.png" alt="Error" className="socialicon" />
          <img src="twitter.png" alt="Error" className="socialicon" />
          </div>
        </div>
      </div>
  )
}

export default App
