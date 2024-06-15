import React from 'react'
import Card from '../components/Card';
import Service from '../services.json';
import LoansImage from '/loans.png';
import InsuranceImage from '/insurance.png';
import ItImage from '/itServices.png';
import RealEstateImage from '/realEstate.png';
import {Link} from 'react-router-dom';

const HomeCards = () => {
    return (
    <>
        <div className='flex-col mobile:m-1 mobile:p-0 laptop:m-10 p-4'>
            <h2 className='laptop:text-5xl font-bold my-10 text-center mobile:text-3xl'>Our Services</h2>
            <div className='grid mobile:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-4'>
                {Service.services.map(service => 
                    <Card>
                    <Link to='/loans'>
                        <h3 className='mobile:text-base laptop:text-2xl font-bold mb-1'>{service.title}</h3>
                        <p className='mobile:hidden tablet:text-xl laptop:text-xl m-2'>{service.para}</p>
                        <img src={service.img}/>
                    </Link>
                    </Card>
                )}
            </div>
        </div>
    </>
    )
}

export default HomeCards
