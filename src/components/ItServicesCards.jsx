import React from 'react'
import Card from '../components/Card';
import Product from '../products.json';
import { Link } from 'react-router-dom';

const ItServicesCards = () => {
  return (
    <>
        <div className='flex-col my-10 mobile:mx-2 mx-10'>
            
            <h2 className='text-5xl font-bold my-24 mb-6 text-center mobile:text-3xl my-18 mb-3'>IT Services</h2>
            {/* <p className='text-xl text-center mb-10'>Click on the type of IT services below, fill the form and get approved.</p> */}
            <div className='grid laptop:grid-cols-5
            tablet:grid-cols-3
            mobile:grid-cols-2'>
            {Product.itServices.map(itService =>
                <Card key={itService.id}>
                    <Link to={`/itService/${itService.id}`}>
                            <div className='flex flex-col items-center'>
                                <h3 className='text-xl mobile:text-base font-bold mb-1' key={itService.title}>{itService.title}</h3>
                                <img key={itService.img} src={itService.img}/>
                            </div>
                    </Link>
                </Card>
            )}
            </div>

        </div>
    </>
  )
}

export default ItServicesCards
