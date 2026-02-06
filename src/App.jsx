import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Reminders from './Pages/Reminders'
import Profile from './Pages/Profile'
import Catalog from './Pages/Catalog'
import Events from './Pages/Events'
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <div className=' text-black h-dvh w-full'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='Catalog' element={<Catalog />} />
            <Route path='Events' element={<Events />} />
            <Route path='Cart' element={<Cart />} />
            <Route path='Reminders' element={<Reminders />} />
            <Route path='Profile' element={<Profile />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
