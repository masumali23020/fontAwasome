import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { footerInf } from '../data/data'

const Footer = () => {
  return (
    <div className='bg-[#183153] p-6 mt-5 w-full'>
        {/* top side  */}
        <div className='flex flex-col xl:flex-row gap-10 mt-5 mb-5 '>
            {/* left side  */}
            <div className='w-full xl:w-[30%] lg:w-full'>
               <Link to="#">
               <FontAwesomeIcon size='25' color='tomato' icon={faFlag} />
               </Link>
               <div className=' space-y-5 mt-5'>
                <h1 className='text-[18px] text-lime-50 font-medium'>Go Make Something Awesome</h1>
                <p className='text-[14px] text-lime-50 font-light'>Font Awesome is the internet's icon library and toolkit used by millions of designers, developers, and content creators.</p>
                <p className='text-[14px] text-lime-50 font-light '>Made with  and  in Bentonville, Boston, Chicago, Grand Rapids, Joplin, Kansas City, Seattle, Tampa, and Vergennes.</p>
               </div>

            </div>
            {/* right side  */}
            <div className='xl:w-[60%] grid grid-cols-2 lg:grid-cols-3  justify-between '>
            {footerInf.map((info) => (
               <div key={info.id}>
                 <p className=' text-[18px] text-[#616d8a]'> {info.title} </p>
                 {info.listItem.map((item)=> (
                    <ul className=' text-lime-50 mt-4 mb-4 hover:text-[#2165ca] transition-all duration-150' key={item.id}>
                        <li >
                            <NavLink > {item.title} </NavLink>
                        </li>
                    </ul>
                 ))}
               </div>
                
            ))}

        </div>

        </div>
        {/* bottom side  */}
       
        <div className=' flex flex-col md:flex-row justify-between '>

            <div>
                <ul  className='text-lime-50 font-light flex gap-5 '>
                            <li>
                                <NavLink t0="3">
                                License
                                </NavLink>
                            </li>
                            <li>
                                <NavLink t0="3">
                                Support
                                </NavLink>
                            </li>
                            <li>
                                <NavLink t0="3">
                                Troubleshooting
                                </NavLink>
                            </li>
                            <li>
                                <NavLink t0="3">
                                Status
                                </NavLink>
                            </li>
                        </ul> 
        
            </div>
            <p className=' text-[#90b9d1'> © Fonticons, Inc.</p>
        </div>

    </div>
  )
}

export default Footer