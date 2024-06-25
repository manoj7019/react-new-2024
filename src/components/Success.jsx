import React from 'react'
import SuccessGirl from '/successGirl.png';

const Success = () => {
  return (
    <div className='m-5 laptop:mt-28 mobile:mt-20 flex flex-col items-center'>
      <h1 className='text-3xl text-center font-bold'>Thank You! We'll get in touch with you shortly.</h1>
      <img className='laptop:w-1/2' src={SuccessGirl}/>
    </div>
  )
}

export default Success
