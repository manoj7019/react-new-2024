import React from 'react'
import SuccessGirl from '/successGirl.png';

const Success = () => {
  return (
    <div className='mt-20 flex flex-col items-center'>
      <h1 className='text-3xl font-bold'>Thank You!</h1>
      <img src={SuccessGirl}/>
    </div>
  )
}

export default Success
