import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState,useEffect } from "react";
import axios from "axios";
import {setItemWithExpiry} from '../api'


function Login() {
  const [user, setUser] = useState({ email: "", password: "" })
  const navigate = useNavigate();
  const [error, setError] = useState('');


  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => {
        setError("")
      }, 5000)
      return () => clearTimeout(timeout)
    }

  }, [error])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const response = axios.post('http://localhost:8081/api/auth/login', user, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      console.log(response.data);
      const token = response.data.token
      setItemWithExpiry('token',token,1000*60*60*24)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response.data.message)
    }
  }
  return (
    <div className="container">
      <div className="formcontainer">
        <header>Login Page</header>
        <div>
          {error && <div style={{color:'red',fontSize:'10px'}}>{error}</div>}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="text" name="email" id="email" value={user.email}
              onChange={handleChange} required />
            <label htmlFor="">Email</label>
          </div>
          <div className="input-field">
            <input type="password" name="password" id="password" value={user.password}
              onChange={handleChange} required />
            <label htmlFor="">Password</label>
          </div>
          <div className="button">
            <div className="inner">
              <button>Login</button>
            </div>
          </div>
        </form>
        <div className="forget">
          <Link
            to="#"
            style={{
              textDecoration: "none",
              color: "darkcyan",
              fontWeight: "600",
            }}
          >
            Forget Password?
          </Link>
        </div>
        <div className="register">
          Not a member yet?
          <Link
            to="/registration"
            style={{
              textDecoration: "none",
              color: "darkcyan",
              fontWeight: "600",
            }}
          >Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
