import { FaOpencart } from 'react-icons/fa'
import { GoHome, GoSignOut } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'
import { IoPersonOutline } from 'react-icons/io5'
import { MdEventAvailable, MdOutlineEmojiEvents } from 'react-icons/md'
import { TbCategory } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import { MenuIndex } from '../store'
import WOW from "wowjs";

export default function SideMenu() {
    const { CloseMenu, OpenMenu } = MenuIndex()

    return (
        <div onClick={() => {CloseMenu()}} className={` fixed top-20 left-0 w-full h-dvh bg-[#0000005a]`} >
            <div className={` wow animate__animated animate__slideInLeft w-[320px] h-full dark:text-[#9ea1a6] bg-[#f5f5f5f5] dark:bg-[#111215] border-t border-[#00000009] relative flex flex-col overflow-hidden pt-10`}>
                <IoMdClose onClick={() => CloseMenu()} className='absolute top-5 right-5 text-xl cursor-pointer ' />
                <NavLink to={"/Profile"} className={({ isActive }) => " flex flex-row items-center font-semibold text-xl hover:scale-[1.04] gap-2.5  hover:bg-gray-200 dark:hover:bg-[#2b303b] p-2.5 rounded-lg transition duration-200 " + `${isActive ? "bg-gray-200 dark:bg-[#2b303b]" : "bg-none"}`} ><IoPersonOutline /> <p >Profile</p></NavLink>
                <NavLink to={"/"} className={({ isActive }) => " flex flex-row gap-2.5 items-center font-semibold text-xl hover:scale-[1.04]  hover:bg-gray-200  dark:hover:bg-[#2b303b] p-2.5 rounded-lg transition duration-200 ouline-0 " + `${isActive ? "bg-gray-200 dark:bg-[#2b303b]" : "bg-none"}`}> <GoHome />Home</NavLink>
                <NavLink to={"/Catalog"} className={({ isActive }) => " flex flex-row gap-2.5 items-center font-semibold text-xl hover:scale-[1.04]  hover:bg-gray-200 dark:hover:bg-[#2b303b] p-2.5 rounded-lg transition duration-200 " + `${isActive ? "bg-gray-200 dark:bg-[#2b303b]" : "bg-none"}`}><TbCategory />Categories</NavLink>
                <NavLink to={"/Events"} className={({ isActive }) => " flex flex-row gap-2.5 items-center font-semibold text-xl hover:scale-[1.04]  hover:bg-gray-200 dark:hover:bg-[#2b303b] p-2.5 rounded-lg transition duration-200 " + `${isActive ? "bg-gray-200 dark:bg-[#2b303b]" : "bg-none"}`}><MdOutlineEmojiEvents />Events</NavLink>
                <NavLink to={"/Reminders"} className={({ isActive }) => " flex flex-row gap-2.5 items-center font-semibold text-xl hover:scale-[1.04]  hover:bg-gray-200  dark:hover:bg-[#2b303b] p-2.5 rounded-lg transition duration-200 " + `${isActive ? "bg-gray-200 dark:bg-[#2b303b]" : "bg-none"}`}><MdEventAvailable />Reminders</NavLink>
                <NavLink to={"/Cart"} className={({ isActive }) => " flex flex-row gap-2.5 items-center font-semibold text-xl hover:scale-[1.04]  hover:bg-gray-200 dark:hover:bg-[#2b303b] p-2.5 rounded-lg transition duration-200 " + `${isActive ? "bg-gray-200 dark:bg-[#2b303b]" : "bg-none"}`} ><FaOpencart /><p >Booking Draft</p> </NavLink>
                <NavLink to={"/Login"} className={({ isActive }) => " flex flex-row gap-2.5 items-center font-semibold text-xl hover:scale-[1.04]  hover:bg-gray-200 dark:hover:bg-[#2b303b] p-2.5 rounded-lg transition duration-200 " + `${isActive ? "bg-gray-200 dark:bg-[#2b303b]" : "bg-none"}`}><GoSignOut /> <p >Signout</p></NavLink>
            </div>
        </div>
    )
}
