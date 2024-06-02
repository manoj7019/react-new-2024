import React from 'react'
import logo from '../assets/images/sjlogo.png'
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <>
        <div className='bg-black text-white flex justify-between gap-10 p-10 mt-10'>
            <div className='flex flex-col flex-1 gap-5'>
                <Link to='/'>
                    <img
                    className='h-10 w-auto rounded'
                    src={logo}
                    />
                </Link>
                <p className=''>#971/30, MIG, 3rd Floor, 3rd Phase, A Sector, Yalahanka New Town, Bengaluru-560064</p>
            </div>
            <div className='flex justify-between gap-20 border rounded-xl px-10 py-5'>
                <div className='flex flex-col'>
                    <Link to='/'>
                        <p className='font-extrabold text-2xl hover:underline'>Loans</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Personal Loan</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Professional Loan</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Home Loan</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Educational Loan</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>OD and CC Loan</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Two wheeler Loan</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Car Loan</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>EV Vehicle Loan</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Educational Loan</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Commercial Vehicle Loan</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Used Vehicle Loan</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Machinery / Equipment Loan</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Balance Transfer / Top-up Loan</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Credit Cards</p>
                    </Link>
                </div>
                <div className='flex flex-col'>
                    <Link to='/'>
                        <p className='font-extrabold text-2xl hover:underline'>Insurance</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Health Insurance</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Life Insurance</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>General / Motor Insurance</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Travel Insurance</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Property Insurance</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Fire Insurance</p>
                    </Link>
                    <Link to='/'>
                        <p className='hover:underline'>Home Insurance</p>
                    </Link>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className=''>
                        <Link to='/'>
                            <p className='font-extrabold text-2xl hover:underline'>IT Services</p>
                        </Link>
                        <Link to='/'>
                            <p className='hover:underline'>Web Development</p>
                        </Link>
                        <Link to='/'>
                            <p className='hover:underline'>App Development</p>
                        </Link>
                        <Link to='/'>
                            <p className='hover:underline'>Digital Marketing</p>
                        </Link>
                        <Link to='/'>
                            <p className='hover:underline'>Graphic Designing</p>
                        </Link>
                    </div>
                    <div className=''>
                        <Link to='/'>
                            <p className='font-extrabold text-2xl hover:underline'>Real Estate</p>
                        </Link>
                        <Link to='/'>
                            <p className='hover:underline'>Property Buy Support</p>
                        </Link>
                        <Link to='/'>
                            <p className='hover:underline'>Property Sell Support</p>
                        </Link>
                        <Link to='/'>
                            <p className='hover:underline'>Property Development Support</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-5">
                <h3 className='text-3xl font-bold'>Get in touch</h3>
                <div className="flex flex-col gap-3">
                    <div className='flex gap-3'>
                        <Link to='/'>
                            <SocialIcon className='border-4 border-blue-900 rounded-3xl' fallback= 'facebook'/>
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
