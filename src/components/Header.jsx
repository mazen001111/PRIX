import React from 'react'
import { FaGripfire, FaOpencart } from 'react-icons/fa'
import { GoSignOut } from 'react-icons/go'
import { IoPersonOutline } from 'react-icons/io5'
import { MdOutlineMenu } from 'react-icons/md'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import SideMenu from './SideMenu'
import { MenuIndex } from '../store'
import { useLogin } from '../store/LoginState'

export default function Header() {
  const { Token, logout } = useLogin()
  const { value, CloseMenu, OpenMenu, toggleMenu } = MenuIndex()
  const finalToken = Token || sessionStorage.getItem("useLogin")

  const nav = useNavigate()
  return (

    <div className='w-full flex justify-center items-center bg-[#0000004a] backdrop-blur-xl min-h-20 fixed top-0 left-0 z-50 px-4' >
      <div className='flex flex-row justify-between items-center container max-w-333 px-4 md:px-10 '>
        <h1 className='font-logo font-bold text-2xl dark:text-[#ffffff] md:text-3xl flex flex-row'>PRIX<FaGripfire className='text-red-600' /></h1>
        <MdOutlineMenu onClick={() => toggleMenu()} className="text-3xl min-[860px]:hidden dark:text-[#ffffff]" />
        <div className='flex flex-row gap-8 max-[860px]:hidden'>
          <NavLink to={"/"} className={({ isActive }) => "text-lg font-semibold  hover:text-red-600  transition duration-200  " + `${isActive ? " text-red-600" : "text-[#8F96A3] dark:text-[#7b818d] "}`}>Home</NavLink>
          <NavLink to={"/Catalog"} className={({ isActive }) => "text-lg font-semibold  hover:text-red-600 transition duration-200  " + `${isActive ? "text-red-600" : "text-[#8F96A3] dark:text-[#7b818d] "}`}>Categories</NavLink>
          <NavLink to={"/Events"} className={({ isActive }) => "text-lg font-semibold  hover:text-red-600  transition duration-200 " + `${isActive ? "text-red-600" : "text-[#8F96A3] dark:text-[#7b818d] "}`}>Events</NavLink>
          <NavLink to={"/Reminders"} className={({ isActive }) => "text-lg font-semibold hover:text-red-600  transition duration-200  " + `${isActive ? "text-red-600" : "text-[#8F96A3] dark:text-[#7b818d] "}`}>Reminders</NavLink>
        </div>
        {finalToken ?

          (<div className='flex flex-row gap-4 items-center text-lg font-semibold max-[860px]:hidden'>
            <NavLink to={"/Cart"} className={({ isActive }) => "hover:bg-gray-200 p-2.5 rounded-lg transition duration-200 text-[#8F96A3] dark:text-[#7b818d] dark:hover:bg-gray-800  " + `${isActive ? "bg-gray-200 dark:bg-gray-800 " : "bg-none"}`} ><FaOpencart /> </NavLink>
            <NavLink to={"/Profile"} className={({ isActive }) => " flex flex-row gap-2.5 items-center text-[#8F96A3] dark:text-[#7b818d]  justify-center hover:bg-gray-200 dark:hover:bg-gray-800 p-2.5 rounded-lg transition duration-200 " + `${isActive ? "bg-gray-200 dark:bg-gray-800 " : "bg-none"}`} ><IoPersonOutline /> <p className='hidden lg:block'>Profile</p></NavLink>
            <NavLink onClick={() => logout()} to={"/Login"} className={({ isActive }) => " flex flex-row gap-2.5 items-center text-[#8F96A3] dark:text-[#7b818d]  justify-center hover:bg-gray-200  dark:hover:bg-gray-800 p-2.5 rounded-lg transition duration-200 " + `${isActive ? "bg-gray-200 dark:bg-gray-800 " : "bg-none"}`}><GoSignOut /> <p className='hidden lg:block'>Signout</p></NavLink>
          </div>) :
          (
            <button onClick={() => nav("/Login")} className='flex justify-center items-center max-[860px]:hidden bg-red-700 rounded-lg px-6 py-2 text-xl text-[#ffffff] font-semibold'>Login</button>
          )

        }
        {
          value ?
            <SideMenu /> : null
        }
      </div>
    </div>
  )
}
