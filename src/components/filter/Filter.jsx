import { faBolt, faFlag, faIcons } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import fourDot from "../../assets/fourDot.svg"
import showFilter from "../../assets/showFilter.svg"
import sixDot from "../../assets/sixDot.svg"
import treeDot from "../../assets/threeLine.svg"

const Filter = ({handelClick,value}) => {
  
  return (
    <>
    {/* mobile show filter button  */}
    <div 
     className=' block sm:hidden  text-[#146ebe] hover:border-[#146ebe] border-[1px] rounded-md  xl:hidden  px-16 py-2'>
       <div className='flex justify-center items-center space-x-2'>
         <img className='w-4 h-4 xl:w-5 xl:h-5 hover:text-[#fefefc]' src={showFilter} alt="sixDot" />               
          <p className='text-[10px] sm:text-[15px] md:text-md xl:text-lg'>Show Filter</p>
        </div>
    </div> 
    
   {/* dekstop  */}
    <div className='  flex  flex-col-reverse gap-10 xl:flex-row  justify-between items-center gap-x-28 xl:gap-7  '>
        <div className=' w-full xl:w-1/2 '>
            <ul className= 'mx-8 sm:mx-28 md:20 xl:mx-10  flex items-center justify-between  '>
                <li onClick={()=> handelClick("classic")} className=' px-6 py-4 hover:border-b-4 hover:border-blue-700 hover:text-[#146ebe] duration-150 transition-all hover:cursor-pointer' value="classic" >
                    <FontAwesomeIcon size='2x'  icon={faIcons} />
                    <p>classic</p>
                </li>
                <li onClick={()=> handelClick("sharp")} className=' px-6 py-4 border-b-4 hover:border-blue-700 hover:text-[#146ebe] duration-150 transition-all' value="Sharp" >
                    <FontAwesomeIcon size='2x'  icon={faIcons}/>
                    <p>Sharp</p>
                </li>
                <li onClick={()=> handelClick("brands")} className=' px-6 py-4 border-b-4 hover:border-blue-700 hover:text-[#146ebe] duration-150 transition-all' >
                    <FontAwesomeIcon size='2x'  icon={faFlag}/>
                    <p>Brands</p>
                </li>
                <li onClick={()=> handelClick("free")} className=' px-6 py-4 border-b-4 hover:border-blue-700 hover:text-[#146ebe] duration-150 transition-all' >
                    <FontAwesomeIcon size='2x'  icon={faBolt}/>
                    <p>Free</p>
                </li>
            </ul>
        </div>
        <div className=' w-full xl:w-1/2 flex justify-evenly '>
            {/* button  */}
            <div className='w-full flex justify-between items-center'>
                  {/* lg hide filter show button           */}
                <div className=' hidden sm:block  text-[#146ebe] hover:border-[#146ebe] border-[1px] rounded-md  xl:hidden  px-16 py-2'>
                  <div className='flex justify-center items-center space-x-2'>
                  <img className='w-4 h-4 xl:w-5 xl:h-5 hover:text-[#fefefc]' src={showFilter} alt="sixDot" />
                    
                    <p className='text-[10px] sm:text-[15px] md:text-md xl:text-lg'>Show Filter</p>
                  </div>
                </div> 
              {/* four dot  */}

            {/* <div className='relative'> */}
               <button className=''>
                    <img className='w-4 h-4 md:w-5 md:h-5  hover:text-[#fefefc]' src={fourDot} alt="sixDot" />
                </button>
{/*                 
                    <FontAwesomeIcon  className=' absolute -top-6 left-[50%] right-[50%] w-2  ' icon={faCaretSquareUp} size='1x' /> */}
                
            {/* </div> */}

                <button className=''>
                    <img className='w-4 h-4 md:w-5 md:h-5' src={sixDot} alt="sixDot" />
                </button>
                <button className=''>
                    <img className='w-4 h-4 md:w-5 md:h-5 ' src={treeDot} alt="sixDot" />
                </button>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
 
 <option value="CA">6.4.2</option>
 <option value="FR">5.15.4</option>
 <option value="FR">All version</option>

</select>

<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
 
 <option value="CA">Featured</option>
 <option value="FR">Alphabetical</option>

</select>
            </div>

            {/* selected section  */}
            

        </div>
        <div>
        
        </div>
    </div>

  
    </>
  )
}

export default Filter