import React, { useEffect, useState } from 'react'
import './ForgetPassword.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('')
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => {
                setError("")
            }, 5000)
            return () => clearTimeout(timeout)
        }

    }, [error])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        // Add logic to handle password reset here, e.g., API call
        try {
            const response = await axios.get(`http://localhost:8081/api/auth/forgetpassword/${email}`, {
                headers: {
                    "Content-Type": 'application/json',
                }
            })
            console.log(response.data.message)
            setMessage(`Password reset link sent to ${email}`);
        } catch (err) {
            console.log(err.response.data.message)
            setError(err.response?.data?.message || 'Something went Wrong Please Try Again.')
        }
        finally{
            setLoading(false)
        }
        
    };

    return (
        <div className='container'>
            <h2>Forget Password</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">{loading ? 'Sending...': "Send Reset Link"}</button>
            </form>
            {message && <p>{message}<br></br> <Link to='/login' style={{fontSize:'20px'}}>Back...</Link></p>}
            {error && <p style={{ color: 'red', fontSize: '25px' }}>{error}</p>}
        </div>
    );
};