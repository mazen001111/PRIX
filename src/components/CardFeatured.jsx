import React from 'react'
import { FaCalendarWeek } from 'react-icons/fa'
import { GoPeople } from 'react-icons/go'
import { IoLocationOutline } from 'react-icons/io5'
import API_URL from '../config'

export default function CardFeatured({ el }) {
    return (
        <div className='group flex min-h-83 flex-col md:flex-row rounded-xl bg-[#14181f] hover:-translate-y-2  transition duration-300 overflow-hidden border border-[#8f96a355]'>
            <div className='w-full md:w-1/2 h-full flex justify-center items-center overflow-hidden'>
                <img className='md:min-h-85 group-hover:scale-[1.05] overflow-hidden transition duration-300' src={API_URL + el.eventPhoto.url} alt="" />
            </div>
            <div className='w-full flex  flex-col gap-4 md:w-1/2 p-4 min-[530]:p-8'>
                <h1 className='text-lg min-[390px]:text-xl md:text-2xl font-semibold text-[#ffffff]'>{el.eventName}</h1>
                <p className='text-[#8F96A3] text-[12px] min-[390px]:text-[16px]'>{el.eventDescription.length > 60 ? el.eventDescription.slice(0, 60) + "..." : el.eventDescription}</p>
                <div className='flex flex-col  gap-2.5 items-start w-full text-[#8F96A3] text-[12px] min-[490px]:text-[16px]'>
                    <div className='flex flex-row gap-2  items-center'>
                        <FaCalendarWeek className='text-red-600' />
                        <p>{el.eventDate}</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center '>
                        <IoLocationOutline className='text-red-600' />
                        <p>{el.eventLocation}</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <GoPeople className='text-red-600' />

                        <p>{el.AvailableSeats} Seats available</p>
                    </div>
                </div>
                <div className='flex flex-row w-full items-end grow justify-between pb-4'>
                    <div className='text-[#fafafa] text-[20px]'>
                        <p className='text-[#8F96A3] text-[16px]'>From</p>${el.eventPrice}
                    </div>
                    <button className='py-4 px-7  bg-red-600 hover:scale-[1.04] max-[530px]:py-2 max-[530px]:rounded-lg max-[530px]:px-4 max-[530px]:text-[12px] rounded-2xl transition duration-300 cursor-pointer text-[#fafafa] text-[16px] font-semibold'>BOOK NOW</button>
                </div>
            </div>
        </div>
    )
}
