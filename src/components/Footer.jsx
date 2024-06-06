import React from 'react'
import logoWhite from '../assets/images/sjLogoWhite.png'
import { Link } from 'react-router-dom';
import Product from '../products.json';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <>
        <div className='bg-black text-white flex justify-between gap-10 p-10 mt-10 w-full'>
            <div className='flex flex-col flex-1 gap-5'>
                <Link to='/'>
                    <img
                    className='laptop:h-10 w-auto
                    mobile:w-26 h-auto'
                    src={logoWhite}
                    />
                </Link>
                <p className=''>#971/30, MIG, 3rd Floor, 3rd Phase, A Sector, Yalahanka New Town, Bengaluru-560064</p>
            </div>
            <div className='mobile:hidden laptop:flex justify-between gap-20 border rounded-xl px-10 py-5'>
                <div className='flex flex-col'>
                    <Link to='/loans'>
                            <h2 className='text-2xl font-bold mb-1 hover:underline'>Loans</h2>
                    </Link>
                    {Product.loans.map(loan =>
                    <Link to={`loan/${loan.id}`}>
                        <p className='hover:underline'>{loan.title}</p>
                    </Link>
                    )}
                </div>

                <div className='flex flex-col'>
                    <Link to='/insurance'>
                            <h2 className='text-2xl font-bold mb-1 hover:underline'>Insurance</h2>
                    </Link>
                    {Product.insurances.map(insurance =>
                    <Link to={`insurance/${insurance.id}`}>
                        <p className='hover:underline'>{insurance.title}</p>
                    </Link>
                    )}
                </div>

                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col'>
                        <Link to='/itServices'>
                            <h2 className='text-2xl font-bold mb-1 hover:underline'>IT Services</h2>
                        </Link>
                        {Product.itServices.map(itService =>
                        <Link to={`itServices/${itService.id}`}>
                            <p className='hover:underline'>{itService.title}</p>
                        </Link>
                        )}
                    </div>
                    <div className='flex flex-col'>
                        <Link to='/realEstate'>
                            <h2 className='text-2xl font-bold mb-1 hover:underline'>Real Estate</h2>
                        </Link>
                        {Product.realEstates.map(realEstate =>
                        <Link to={`realEstate/${realEstate.id}`}>
                            <p className='hover:underline'>{realEstate.title}</p>
                        </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-5">
                <h3 className='text-3xl font-bold'>Get in touch</h3>
                <div className="flex flex-col gap-3">
                    <div className='flex gap-3'>
                        <Link to='/'>
                            <SocialIcon className='h-5 w-5 border-4 border-blue-900 rounded-3xl' fallback= 'facebook'/>
                        </Link>
                        <Link to='/'>
                            <SocialIcon className='border-4 border-pink-500 rounded-3xl' fallback= 'instagram'/>
                        </Link>
                        <Link to='/'>
                            <SocialIcon className='border-4 border-green-900 rounded-3xl' fallback= 'linkedin'/>
                        </Link>
                    </div>
                    <div className='flex gap-3'>
                        <Link to='/'>
                            <SocialIcon className='border-4 border-gray-500 rounded-3xl' fallback= 'email'/>
                        </Link>
                        <Link to='/'>
                            <SocialIcon className='border-4 border-green-500 rounded-3xl' fallback= 'whatsapp'/>
                        </Link>
                        <Link to='/'>
                            <SocialIcon className='border-4 border-blue-500 rounded-3xl' fallback= 'telegram'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
