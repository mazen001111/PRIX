import React, { useEffect, useState } from 'react'
import cover from "../assets/cover.jpg"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CardFeatured from '../components/CardFeatured'
export default function Home() {

  const nav = useNavigate()
  const [cat, setCat] = useState([])
  const [featured, setFeatured] = useState([])


  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios.get("http://localhost:1337/api/categories", { params: { populate: "*" } })
        setCat(res.data.data)
        console.log()
      } catch (error) {
        console.log(error?.response?.data)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios.get("http://localhost:1337/api/features", { params: { populate: { events: { populate: "*" } } } })
        setFeatured(res.data.data)
        console.log(res.data.data)
      } catch (error) {
        console.log(error?.response?.data)
      }
    }
    getData()
  }, [])




  return (
    <div className='w-full h-full relative pt-200'>
      <div className="w-full flex justify-center z-10 overflow-hidden max-h-200 h-dvh bg-cover bg-center  bg-no-repeat absolute top-0 " style={{ backgroundImage: `url(${cover})` }}>
        <div className='w-full h-dvh flex justify-center px-4 md:px-7 items-center bg-[#000000d5]'>
          <div className='flex flex-row justify-center lg:justify-start  items-center w-full h-full container max-w-333 '>
            <div className='flex flex-col items-start w-2xl max-w-[90%]'>
              <h1 className='text-[36px] md:text-[72px] text-[#fafafa] w-ful font-black  '>Experience The <p className='text-red-500 inline-block'>Thrill</p> Live</h1>
              <p className='w-full text-[20px] text-[#8F96A3] mt-5'>Book tickets to the world's most exciting events. From Formula 1 races to legendary concerts—your front-row seat awaits.</p>
              <div className='flex flex-col md:flex-row gap-3 w-full mt-8'>
                <button onClick={() => nav("/Events")} className='w-full md:w-1/2 bg-red-600 rounded-xl font-semibold py-3 md:py-5 transition duration-200 cursor-pointer hover:scale-[1.04]  text-[#ffffff] text-[16px]'>EXPLORE EVENTS</button>
                <button onClick={() => nav("/Catalog")} className='w-full md:w-1/2 bg-transparent backdrop-blur-sm rounded-xl transition duration-200 cursor-pointer  font-semibold hover:bg-[#00000081] py-3 md:py-5 text-[#ffffff] text-[16px] '>Browse Categories</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex min-h-122 justify-center items-center mt-50 md:mt-20 mb-32'>
        <div className='flex flex-col container max-w-333 px-5 md:px-7'>
          <p className='text-[14px] text-red-600'>BROWSE BY</p>
          <p className='mt-2 text-[30px] md:text-[36px]  text-[#fafafa] font-bold'>Event Categories</p>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-10'>
            {
              cat.map((el) => (
                <div key={el.documentId} className=" group hover:-translate-y-2 transition duration-300  h-fit overflow-hidden rounded-xl border border-[#8f96a355] relative cursor-pointer">
                  <div className='w-full h-full absolute bottom-0 z-31 left-0  text-xl p-5 font-semibold text-[#ffffff]'>
                    <p className='absolute bottom-7'>{el.catName}</p>
                    <p className='absolute text-[14px] text-[#8F96A3] bottom-3'>{(el.events).length} events</p>
                  </div>
                  <div className='w-full h-full bg-[#00000077] absolute top-0 z-30 left-0'></div>
                  <img className='w-full group-hover:scale-[1.04] transition duration-300 ' src={"http://localhost:1337" + el.catPhoto.url} alt="" />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='flex min-h-122 justify-center items-center mt-50 md:mt-20 mb-32'>
        <div className='flex flex-col items-center container max-w-333 px-5 md:px-7'>
          <p className='text-[14px] text-red-600 text-start w-full'>Don't miss out</p>
          <p className='mt-2 text-[30px] md:text-[36px] text-start w-full mb-10 text-[#fafafa] font-bold'>Featured Events</p>
          <div className='w-full max-w-[90%] flex flex-col gap-7 items-center'>
            {
              featured.map((el) => (
                <CardFeatured key={el.documentId} el={el.events[0]}/>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}
