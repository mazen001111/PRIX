import React from 'react'

export default function CircleWithNumber({number}) {
  return (
    <div className='h-4.5 absolute -right-1 -bottom-1 w-4.5 bg-black text-[#ffffff] text-[12px] flex justify-center items-center rounded-[9px]'>{number}</div>
  )
}
