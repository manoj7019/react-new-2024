import React from 'react'
import SuccessGirl from '/successGirl.png';

const Success = () => {
  return (
    <div className='mt-20 flex flex-col items-center'>
      <h1 className='text-3xl font-bold'>Thank You! We'll get in touch with you shortly.</h1>
      <img className='' src={SuccessGirl}/>
    </div>
  )
}

export default Success
