import { useState } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
import axios from "axios";
const Registration = () => {
  // State hooks for form data
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    role: 1,
    password: "",
    confirmPassword: "",
  });

  // State hook for validation messages
  const [passwordError, setPasswordError] = useState("");
  const [serverError,setServerError] = useState("")
 
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match!");
    } else {
      setPasswordError("");
      try {
        //Send the data to the API
        const response = await axios.post(
          "http://localhost:8081/user/register",
          formData,
          {
            headers:{
              "Content-Type":"application/json"
            }
          }
        )
        console.log(response.data)
        alert(response.data);
      } catch (error) {
        console.log("Error during Registration",error)
        
        if(error.response){
          setServerError(error.response.data.message || "Something went wrong")
        }else{
          setServerError("Network Error, Please Try again later")
        }
        console.log(serverError)
      }
      
    }
  };
  return (
    <div className="reg-container">
      <div className="form-container">
        <h2>Register</h2>
        {passwordError && <span className="error">{passwordError}</span>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="1">Admin</option>
              <option value="2">Employeer</option>
              <option value="3">Jobseeker</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <div
          style={{
            textAlign: "center",
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            gap: "10px",
          }}
        >
          <h4>Already a Member?</h4>
          <span>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "darkcyan",
                fontWeight: "600",
              }}
            >
              SignIn
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Registration;
