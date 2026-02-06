import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaGripfire } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { LuPhone } from 'react-icons/lu'
import { MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import API_URL from '../config'

export default function Footer() {
  const [cat, setCat] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios.get(`${API_URL}/api/categories`)
        setCat(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  return (
    <div className='flex justify-center w-full items-center min-h-85 bg-[#16191f] px-5 md:px-3'>
      <div className='container grid grid-cols-1 md:grid-cols-4 place-items-start md:place-items-center  py-10'>
        <div className='flex flex-col gap-4 mb-4 '>
          <h1 className='font-logo font-bold text-2xl dark:text-[#ffffff] md:text-3xl flex flex-row'>PRIX<FaGripfire className='text-red-600' /></h1>
          <p className='text-[#8c919e] text-[14px]'>Your gateway to the world's most exciting events. From F1 races to concerts, we've got you covered.</p>
        </div>
        <div className='flex flex-col  gap-2 mb-4  '>
          <h1 className='font-semibold text-lg text-[#fafafa]'>Quick links</h1>
          <Link to={"/"} className='text-[#8c919e] text-[14px]' >Home</Link>
          <Link to={"/Catalog"} className='text-[#8c919e] text-[14px]' >Categories</Link>
          <Link to={"/Events"} className='text-[#8c919e] text-[14px]' >Events</Link>
          <Link to={"Profile"} className='text-[#8c919e] text-[14px]' >Profile</Link>
        </div>
        <div className='flex flex-col gap-2 mb-4 '>
          <h1 className='font-semibold text-lg text-[#fafafa]'>Categories</h1>
          {
            cat.map((el) => (
              <p key={el.documentId} className='text-[#8c919e] text-[14px] cursor-pointer'>{el.catName}</p>
            ))
          }
        </div>
        <div className='flex flex-col gap-3.25 mb-4 '>
          <h1 className='font-semibold text-lg text-[#fafafa]'>Contacts</h1>
          <div className='flex flex-row items-center gap-2'>
            <MdOutlineEmail className='text-[16px] text-red-600' />
            <p className='text-[#8c919e] text-[14px]'>support@PRIX.com</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <LuPhone className='text-[16px] text-red-600' />
            <p className='text-[#8c919e] text-[14px]'>1 (555) 123-4567</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <IoLocationOutline className='text-[16px] text-red-600' />
            <p className='text-[#8c919e] text-[14px]'>Monaco, Monte Carlo
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
