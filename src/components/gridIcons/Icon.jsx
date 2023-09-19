import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Icon = ({iconSS}) => {
    const {icon, name,} = iconSS || {}
   
  return (
    <div className='hover:bg-yellow-400 bg-white   flex justify-center items-center flex-col  rounded-md transition-all duration-150 px-2 py-5  '>
                <FontAwesomeIcon className='w-7 h-7 md:w-10 md:h-10' size='2x' color='#183153'  icon={icon} />
                <p className=' text-[#7698cc] text-[9px] sm:text-[11px] md:text-[14px] lg:text-[14px] mt-2 font-thin'>{name}</p>
     </div>
  )
}

export default Icon