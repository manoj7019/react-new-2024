import React from 'react'
import Card from '../components/Card';
import PropertyBuyImage from '../assets/images/propertyBuy.png';
import PropertySellImage from '../assets/images/propertySell.png';
import PropertyDevImage from '../assets/images/propertyDev.png';
import { Link } from 'react-router-dom';

const RealEstateCards = () => {
  return (
    <>
        <div className='flex flex-col my-20 mx-10'>
            {/* <h2 className='text-5xl font-bold my-10 text-center'>Loans</h2> */}
            {/* <p className='text-xl text-center mb-10'>Click on the type of loan below, fill the form and get approved.</p> */}
            <div className='grid grid-cols-5 gap-2'>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>Property Buy Support</h3>
                        <img src={PropertyBuyImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>Property Sell Support</h3>
                        <img src={PropertySellImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>Property Development Support</h3>
                        <img src={PropertyDevImage}/>
                    </div>
                </Link>
                </Card>
            </div>
        </div>
    </>
  )
}

export default RealEstateCards
