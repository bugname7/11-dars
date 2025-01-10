import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import Register from './pages/Register'
function App() {
  return (
    <Routes>
      <Route index element={<MainLayout><Home /></MainLayout>} />
      <Route path='/signin' element={<AuthLayout><Login /></AuthLayout>} />
      <Route path='/signup' element={<AuthLayout><Register /></AuthLayout>} />
    </Routes>
  )
}

export default App
