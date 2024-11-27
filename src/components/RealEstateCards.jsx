import React from 'react'
import Card from '../components/Card';
import Product from '../products.json';
import { Link } from 'react-router-dom';

const RealEstateCards = () => {
  return (
    <>
        <div className='flex-col my-10 mobile:mx-2 mx-10'>

            <h2 className='text-5xl font-bold my-24 mb-6 text-center mobile:text-3xl my-18 mb-3'>Real Estate</h2>
            {/* <p className='text-xl text-center mb-10'>Click on the type of service below, fill the form and get approved.</p> */}
            <div className='grid laptop:grid-cols-5
            tablet:grid-cols-3
            mobile:grid-cols-2'>
            {Product.realEstates.map(realEstate =>
                <Card key={realEstate.id}>
                    <Link to={`/form`}>
                            <div className='flex flex-col items-center'>
                                <h3 className='text-xl mobile:text-base font-bold mb-1' key={realEstate.title}>{realEstate.title}</h3>
                                <img key={realEstate.img} src={realEstate.img}/>
                            </div>
                    </Link>
                </Card>
            )}
            </div>

        </div>
    </>
  )
}

export default RealEstateCards
