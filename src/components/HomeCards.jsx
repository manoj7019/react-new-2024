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
        <div className='flex-col m-4 p-4'>
            <h2 className='text-5xl font-bold my-10 text-center'>Our Services</h2>
            <div className='flex justify-between'>
                <Card>
                <Link to='/loans'>
                    <h3 className='text-2xl font-bold mb-1'>Loans</h3>
                    <p>Get any loan approved asap!</p>
                    <img src={LoansImage}/>
                </Link>
                </Card>
                <Card>
                <Link to='/insurance'>
                    <h3 className='text-2xl font-bold mb-1'>Insurance</h3>
                    <p>Insurance done in minutes.</p>
                    <img src={InsuranceImage}/>
                </Link>
                </Card>
                <Card>
                <Link to='/itServices'>
                    <h3 className='text-2xl font-bold mb-1'>IT Services</h3>
                    <p className=''>IT and marketign services at fingertip.</p>
                    <img src={ItImage}/>
                </Link>
                </Card>
                <Card>
                <Link to='/realEstate'>
                    <h3 className='text-2xl font-bold mb-1'>Real Estate</h3>
                    <p className=''>Get Real estate support.</p>
                    <img src={RealEstateImage}/>
                </Link>
                </Card>
            </div>
        </div>
    </>
    )
}

export default HomeCards
