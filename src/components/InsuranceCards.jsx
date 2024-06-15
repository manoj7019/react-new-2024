import React from 'react'
import Card from '../components/Card';
import Product from '../products.json';
import { Link } from 'react-router-dom';


const InsuranceCards = () => {
  return (
    <>
        <div className='flex-col my-10 mobile:mx-2 mx-10'>
            
            <h2 className='text-5xl font-bold my-24 mb-6 text-center mobile:text-3xl my-18 mb-3'>Insurance</h2>
            {/* <p className='text-xl text-center mb-10'>Click on the type of insurance below, fill the form and get approved.</p> */}
            <div className='grid grid-cols-5 laptop:grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2'>
            {Product.insurances.map(insurance =>
                <Card key={insurance.id}>
                    <Link to={`/insurance/${insurance.id}`}>
                            <div className='flex flex-col items-center'>
                                <h3 className='text-xl mobile:text-lg font-bold mb-1' key={insurance.title}>{insurance.title}</h3>
                                <img key={insurance.img} src={insurance.img}/>
                            </div>
                    </Link>
                </Card>
            )}
            </div>

        </div>
    </>
  )
}

export default InsuranceCards
