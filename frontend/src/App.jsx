import React, { useContext } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import UserProvider, { UserContext } from './context/UserContext'
import Dashboard from './pages/Dashboard'
import EditResume from './components/EditResume'
import { Toaster } from 'react-hot-toast'
import TemplatesPage from './pages/TemplatesPage'

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext)
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#07170f]">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-[#40df8a] border-t-transparent" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/templates" element={<ProtectedRoute><TemplatesPage /></ProtectedRoute>} />
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
