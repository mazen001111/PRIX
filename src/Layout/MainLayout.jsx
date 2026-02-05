import React from 'react'
import Header from '../components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'

export default function MainLayout() {
    const location=useLocation()
    console.log(location)
  return (
    <div className='w-full min-h-screen flex flex-col bg-[#f5f5f5f5] dark:bg-[#0c0e12] pt-20 relative'>
        <Header/>
        <div className='flex-grow'>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
