import React from 'react'
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <>
        <div className=''>
            <FaExclamationTriangle className=''/>
            <h1 className=''>Job not founddd</h1>
            <p className=''>There are no jobs available RN.</p>
            <Link to='/' className=''>

            </Link>
        </div>
    </>
  )
}

export default NotFoundPage
