import React from 'react'
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import ComingSoonImage from '/comingSoon.png';

const NotFoundPage = () => {
  return (
    <>
        <div className='flex flex-col items-center my-28 gap-10'>
            <h1 className='text-3xl font-bold'>Coming Sooooon!!</h1>
            <img 
            src={ComingSoonImage}
            className='mobile:w-1/2 laptop:w-1/4'
            />
            <Link to='/' className=''>
            </Link>
        </div>
    </>
  )
}

export default NotFoundPage
