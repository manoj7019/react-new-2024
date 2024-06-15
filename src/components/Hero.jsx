import React from 'react'
import HeroImage from '/heroImage.png';

const Hero = ({title = 'Get instant loan within a minute!', subtitle = 'Click the button below, select the loan, fill the form and get approved for a loan immediately.'}) => {
    return (
        <div>
        <>
            <div className='mobile:flex flex-col mobile:my-12 mx-2 laptop:flex-row justify-between laptop:my-32 mx-4 gap-10'>
                <div className='flex-col p-4 m-4 mobile:m-0 mobile:mt-5'>
                    <h1 className='mobile:text-5xl laptop:text-8xl font-bold'>{ title }</h1>
                    <p className='laptop:text-2xl my-6 mr-10 mobile:text-xl'>{ subtitle }</p>
                    <button className='bg-blue-500 text-white text-2xl px-8 py-2 rounded-full hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500'>Get a loan</button>
                </div>
                <div className='flex shrink-0 -mr-4 py-4 mobile:ml-2'>
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
