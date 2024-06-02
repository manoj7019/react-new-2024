import React from 'react'
import Card from '../components/Card';
import WebDevImage from '../assets/images/webDev.png';
import AppDevImage from '../assets/images/appDev.png';
import DigitalMarketingImage from '../assets/images/digitalMarketing.png';
import GraphicDesignImage from '../assets/images/graphicDesign.png';
import { Link } from 'react-router-dom';

const ItServicesCards = () => {
  return (
    <>
        <div className='flex-col my-20 mx-10'>
            {/* <h2 className='text-5xl font-bold my-10 text-center'>Loans</h2> */}
            {/* <p className='text-xl text-center mb-10'>Click on the type of loan below, fill the form and get approved.</p> */}
            <div className='grid grid-cols-5 gap-2'>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>Web Development</h3>
                        <img src={WebDevImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>App Development</h3>
                        <img src={AppDevImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>Digital Marketing</h3>
                        <img src={DigitalMarketingImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>Graphic Designing</h3>
                        <img src={GraphicDesignImage}/>
                    </div>
                </Link>
                </Card>
            </div>
        </div>
    </>
  )
}

export default ItServicesCards
