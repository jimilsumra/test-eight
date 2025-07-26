import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './components/Users'
import User from './components/User'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/user/:id' element={<User/>} />
      </Routes>
    </Router>

  </StrictMode>,
)
