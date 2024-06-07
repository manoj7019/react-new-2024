import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/sjlogo.png';
import menuIcon from '../assets/images/menuIcon.png';
import closeIcon from '../assets/images/closeIcon.png';
import { useState } from 'react';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const linkClass = ({isActive}) => isActive ? 'bg-black text-white laptop:rounded-full text-base px-4 py-0.5 mobile:py-0.5 rounded text-3xl' : 'hover:bg-blue-500 hover:text-white px-4 laptop:rounded-full text-base py-0.5 mobile:rounded py-0.5 text-3xl' ;
    
    function handleSetShowDropdown() {
        setShowDropdown(!showDropdown);
    }

  return (
    <>
      <div className='fixed inset-x-0 z-50 bg-white top-0 laptop:flex justify-between items-center laptop:my-0 px-20 laptop:py-4 mobile:flex my-[-3%] mobile:py-0 mobile:px-6 mobile:pt-1 tablet:my-0 '>

            <NavLink className='shrink-0' to='/'>
                <img 
                className='laptop:h-12 w-auto mobile:h-8' 
                src={logo}
                />
            </NavLink>


            <div className='mobile:hidden laptop:flex flex-8 justify-between top-0 bg-gray-50 gap-5 px-10 py-2 rounded-3xl'>
                <NavLink to='/loans' className={linkClass}>
                    Loans
                </NavLink>
                <NavLink to='/insurance' className={linkClass}>
                    Insurance
                </NavLink>
                <NavLink to='/itServices' className={linkClass}>
                    IT Services
                </NavLink>
                <NavLink to='/realEstate' className={linkClass}>
                    Real Estate
                </NavLink>
                <NavLink to='/contact' className={linkClass}>
                    Contact Us
                </NavLink>
            </div>

            <div className='flex items-center'>
                <button className='laptop:bg-blue-500 text-white text-xl px-8 py-2 rounded-full hover:bg-white hover:text-blue-500 phone:hidden tablet:hidden' type='button'>Become a partner</button>

                <img 
                    className='h-6 w-auto cursor-pointer laptop:hidden' 
                    src={showDropdown ? `${closeIcon}` : `${menuIcon}`} 
                    onClick={handleSetShowDropdown}
                />
            </div>

            {showDropdown && 
            <div className='laptop:hidden mobile:absolute min-h-[100vh] left-0 top-[100%] w-full px-1'>
                <div className='flex flex-col flex-8 justify-between bg-gray-50 gap-6 px-5 py-5 rounded-lg z-50'>
                    <NavLink onClick={handleSetShowDropdown} to='/loans' className={linkClass}>
                        Loans
                    </NavLink>
                    <NavLink onClick={handleSetShowDropdown} to='/insurance' className={linkClass}>
                        Insurance
                    </NavLink>
                    <NavLink onClick={handleSetShowDropdown} to='/itServices' className={linkClass}>
                        IT Services
                    </NavLink>
                    <NavLink onClick={handleSetShowDropdown} to='/realEstate' className={linkClass}>
                        Real Estate
                    </NavLink>
                    <NavLink onClick={handleSetShowDropdown} to='/contact' className={linkClass}>
                        Contact Us
                    </NavLink>
                    <NavLink onClick={handleSetShowDropdown} to='/' className={linkClass}>
                        Become a partner
                    </NavLink>
                </div>
            </div>
            }
      </div>
    </>
  )
}

export default Navbar
