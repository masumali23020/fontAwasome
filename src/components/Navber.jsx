import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import arrow from "../assets/arrow.svg"
import { navber } from '../data/data'

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCloseSideBar = () => {
    if (isMenuOpen !== undefined && screenSize <= 900) {
      isMenuOpen(false);
    }
  };

  return (
    <nav>
        <div className=' flex  justify-between items-center '>
          {/* desktop design  */}
          <div className='flex justify-center items-center  space-x-10  '>
          {navber.map((item) => (
                  <ul  key={item.id}>
                      <li className='text-[#666f8a] hover:text-[#538ed7] text-[18px] '>
                          <NavLink to={item.link} href="">{item.title} </NavLink>
                      </li>
                  </ul>
              ))}
          </div>

          {/* mobile design  */}
          {/* <div className='flex justify-center items-center w-full  '>
            <ul className='w-full flex justify-between items-center'>
              <li className='text-[#666f8a] hover:text-[#538ed7] text-[18px] '>
                <NavLink>
                  <FontAwesomeIcon icon={faBars} />
                </NavLink>
                </li>
                <li className='text-[#666f8a] hover:text-[#538ed7] text-[18px] '>
                <NavLink>
                  <FontAwesomeIcon icon={faFlag} />
                </NavLink>
                </li>
                <li className='text-[#666f8a] hover:text-[#538ed7] text-[18px] '>
                <NavLink>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </NavLink>
                </li>
              
            </ul>
          </div> */}

          <div className=''>
          <img className='w-6 h-6  ' src={arrow} alt="afsafd" />
          </div>

            
        </div>
    </nav>
  )
}

export default Navber