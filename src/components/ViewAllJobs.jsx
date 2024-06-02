import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <>
    <div className='max-w-lg m-auto my-4'>
      <Link to='/contact' className='block rounded-xl text-center text-white bg-black px-6 py-2'>
        View all jobs
      </Link>
    </div>
    </>
  )
}

export default ViewAllJobs
