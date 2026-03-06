import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Header/>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App