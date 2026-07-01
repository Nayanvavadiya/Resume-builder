import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import UserProvider from './context/UserContext'
import Dashboard from './pages/Dashboard'
import EditResume from './components/EditResume'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/resume/:resumeId' element={<EditResume />} />
      </Routes>

      <Toaster toastOptions={{
        className: "",
        style: {
          fontSize: "30px"
        }
      }}>

      </Toaster>
    </UserProvider>
  )
}

export default App
