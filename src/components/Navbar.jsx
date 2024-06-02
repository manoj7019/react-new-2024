import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/sjlogo.png';

const Navbar = () => {
    const linkClass = ({isActive}) => isActive ? 'bg-black text-white rounded-full px-4 py-0.5' : 'hover:bg-black hover:text-white rounded-full px-4 py-0.5' ;
  return (
    <>
      <div className='flex justify-between items-center mx-4 my-2 p-2'>
            <NavLink className='' to='/'>
                <img 
                className='h-12 w-auto'
                src={logo}
                />
            </NavLink>
        <div className='flex flex-8 justify-between bg-gray-50 gap-10 px-10 py-2 rounded-3xl'>
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
        <div className='flex'>
            <button className='bg-red-600 text-white px-8 py-2 rounded-full hover:bg-white hover:text-red-600' type='button' >Login</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
