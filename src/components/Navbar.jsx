import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/sjlogo.png';
import menuIcon from '/menuIcon.png';
import closeIcon from '/closeIcon.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const linkClass = ({isActive}) => isActive ? 'bg-black text-white laptop:rounded-full text-base px-4 py-0.5 mobile:py-0.5 rounded text-3xl' : 'hover:bg-blue-500 hover:text-white px-4 laptop:rounded-full text-base py-0.5 mobile:rounded py-0.5 text-3xl' ;
    const partnerClass =  ({isActive}) => isActive ? 'laptop:bg-white text-blue-500 text-xl px-8 py-2 rounded-full border-2 border-blue-500 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500' : 'laptop:bg-blue-500 text-white text-xl px-8 py-2 rounded-full hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500' ;

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        if(window.innerWidth > 1100) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    

    const updateMedia = () => {
        if(window.innerWidth > 1100) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        } 
    }

        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia)
    }, [])

    function handleSetShowDropdown() {
        setShowDropdown(!showDropdown);
    }

  return (
    <>
      <div className='fixed inset-x-0 z-50 bg-white top-0 laptop:flex justify-between items-center laptop:my-0 px-20 laptop:py-4 mobile:flex my-0 mobile:py-3 mobile:px-6 tablet:my-0 tablet:py-2'>

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
                <NavLink to='*' className={linkClass}>
                    CIBIL Correction
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
                
                {isDesktop ? 
                <NavLink to='/becomeAPartner' className={partnerClass} type='button'>
                    Become a partner
                </NavLink>
                    :
                <img 
                    className='h-6 w-auto cursor-pointer laptop:hidden' 
                    src={showDropdown ? `${closeIcon}` : `${menuIcon}`} 
                    onClick={handleSetShowDropdown}
                />
                }               
            </div>

            {showDropdown && 
            <div className='laptop:hidden mobile:absolute min-h-[100vh] left-0 top-[100%] w-full px-1'>
                <div className='flex flex-col flex-8 justify-between bg-gray-50 gap-6 px-5 py-5 rounded-lg z-50'>
                    <NavLink onClick={handleSetShowDropdown} to='/loans' className={linkClass}>
                        Loans
                    </NavLink>
                    <NavLink onClick={handleSetShowDropdown} to='/' className={linkClass}>
                        CIBIL Correction
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
                    <NavLink onClick={handleSetShowDropdown} to='/becomeAPartner' className={linkClass}>
                        Become a partner
                    </NavLink>
                    <NavLink onClick={handleSetShowDropdown} to='/contact' className={linkClass}>
                        Contact Us
                    </NavLink>
                    <NavLink onClick={handleSetShowDropdown} to='*' className={linkClass}>
                        Sign In
                    </NavLink>
                </div>
            </div>
            }
      </div>
    </>
  )
}

export default Navbar
