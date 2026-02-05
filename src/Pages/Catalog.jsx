import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Catalog() {
    const [cat, setCat] = useState([])


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
  return (
      <div className='flex min-h-122 justify-center items-center mt-15 md:mt-20 mb-15'>
        <div className='flex flex-col container max-w-333 px-5 md:px-7'>
=          <p className='mt-2 text-[30px] md:text-[36px]  text-[#fafafa] font-bold'>Event Categories</p>
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
      </div>  )
}
