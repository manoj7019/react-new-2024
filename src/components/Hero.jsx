import React from 'react'
import HeroImage from '../assets/images/heroImage.png';

const Hero = ({title = 'Get instant loan within a minute!', subtitle = 'Click the button below, select the loan, fill the form and get approved for a loan immediately.'}) => {
    return (
        <div>
        <>
            <div className='flex justify-between my-10 mx-4 gap-10'>
                <div className='flex-col p-4 m-4'>
                    <h1 className='text-8xl font-bold'>{ title }</h1>
                    <p className='text-2xl my-6 mr-10'>{ subtitle }</p>
                    <button className='bg-red-600 text-white text-2xl px-8 py-2 rounded-full hover:bg-white hover:text-red-600'>Get a loan</button>
                </div>
                <div className='flex shrink-0 -mx-4 py-4'>
                    <img 
                    className='w-full'
                    src={HeroImage}/>
                </div>
            </div>
        </>
        </div>
    )
}

export default Hero
