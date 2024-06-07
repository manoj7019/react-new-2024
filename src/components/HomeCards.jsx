import React from 'react'
import Card from '../components/Card';
import LoansImage from '../assets/images/loans.png';
import InsuranceImage from '../assets/images/insurance.png';
import ItImage from '../assets/images/itServices.png';
import RealEstateImage from '../assets/images/realEstate.png';
import {Link} from 'react-router-dom';

const HomeCards = () => {
    return (
    <>
        <div className='flex-col mobile:m-1 mobile:p-0 laptop:m-10 p-4'>
            <h2 className='laptop:text-5xl font-bold my-10 text-center mobile:text-3xl'>Our Services</h2>
            <div className='grid mobile:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-4'>
                <Card>
                <Link to='/loans'>
                    <h3 className='mobile:text-base laptop:text-2xl font-bold mb-1'>Loans</h3>
                    <p className='mobile:hidden'>Get any loan approved asap!</p>
                    <img src={LoansImage}/>
                </Link>
                </Card>
                <Card>
                <Link to='/insurance'>
                    <h3 className='mobile:text-base laptop:text-2xl font-bold mb-1'>Insurance</h3>
                    <p className='mobile:hidden'>Insurance done in minutes.</p>
                    <img src={InsuranceImage}/>
                </Link>
                </Card>
                <Card>
                <Link to='/itServices'>
                    <h3 className='mobile:text-base laptop:text-2xl font-bold mb-1'>IT Services</h3>
                    <p className='mobile:hidden'>IT and marketign services at fingertip.</p>
                    <img src={ItImage}/>
                </Link>
                </Card>
                <Card>
                <Link to='/realEstate'>
                    <h3 className='mobile:text-base laptop:text-2xl font-bold mb-1'>Real Estate</h3>
                    <p className='mobile:hidden'>Get Real estate support.</p>
                    <img src={RealEstateImage}/>
                </Link>
                </Card>
            </div>
        </div>
    </>
    )
}

export default HomeCards
