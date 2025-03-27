import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './components/Registration.jsx'
import { Dashboard } from './components/Dashboard.jsx'


createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration/>} />
    <Route path='/dashboard' element={<Dashboard />} />
  </Routes>
  </BrowserRouter>
)
