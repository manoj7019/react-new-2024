import React from 'react'
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import ComingSoonImage from '../assets/images/comingSoon.jpeg';

const NotFoundPage = () => {
  return (
    <>
        <div className='flex flex-col items-center my-20 gap-10'>
            <h1 className='text-3xl font-bold'>Cummming Sooooon!!</h1>
            <img src={ComingSoonImage}/>
            <Link to='/' className=''>

            </Link>
        </div>
    </>
  )
}

export default NotFoundPage
