import React from 'react'
import Card from '../components/Card';
import Service from '../services.json';
import {Link} from 'react-router-dom';

const HomeCards = () => {

    return (
    <>
        <div className='flex-col mobile:m-1 mobile:p-0 laptop:m-10 p-4'>
            <h2 className='laptop:text-5xl font-bold my-10 text-center mobile:text-3xl my-5'>Our Services</h2>
            <div className='grid mobile:grid-cols-2 mobile:gap-0 tablet:grid-cols-2 laptop:grid-cols-5'>
                {Service.services.map(service => 
                    <Card key={service.id}>
                    <Link to={`/${service.id}`}>
                        <h3 className='mobile:text-base laptop:text-2xl font-bold mb-1'>{service.title}</h3>
                        <p className='mobile:hidden tablet:text-xl laptop:text-xl m-2'>{service.para}</p>
                        <img className='transition-all' src={service.img}/>
                    </Link>
                    </Card>
                )}
            </div>
        </div>
    </>
    )
}

export default HomeCards
