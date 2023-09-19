import React from 'react'
import Catagories from '../SideBar/CATEGORIES/Catagories'
import Featured from '../SideBar/FEATURED/Featured'
import Style from '../SideBar/Stylee/Style'

const SideManu = ({handelChange}) => {
    
  return (
    <div className='p-6'>
      <div className='bg-[#e5dbff] w-full h-36 rounded-md relative mb-10'>
        <div className=' absolute w-8 h-8 bg-[#6741d9] rounded-full -top-3 -right-2 hover:bg-red-800 cursor-pointer'>
          <p  className='absolute top-[3%] left-[35%] text-lime-50 text-xl  ' > x</p>

        </div>

      </div>
      <Style handelChange={handelChange} />
      <Featured handelChange={handelChange} />
      <Catagories handelChange={handelChange} />
    </div>
  )
}

export default SideManu


