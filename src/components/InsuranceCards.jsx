import React from 'react'
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import HealthInsuranceImage from '../assets/images/healthInsurance.png';
import LifeInsuranceImage from '../assets/images/lifeInsurance.png';
import MotorInsuranceImage from '../assets/images/motorInsurance.png';
import TravelInsuranceImage from '../assets/images/travelInsurance.png';
import PropertyInsuranceImage from '../assets/images/propertyInsurance.png';
import FireInsuranceImage from '../assets/images/fireInsurance.png';
import HomeInsuranceImage from '../assets/images/HomeInsurance.png';


const InsuranceCards = () => {
  return (
    <>
        <div className='flex-col my-20 mx-10'>
            {/* <h2 className='text-5xl font-bold my-10 text-center'>Loans</h2> */}
            {/* <p className='text-xl text-center mb-10'>Click on the type of loan below, fill the form and get approved.</p> */}
            <div className='grid grid-cols-5 gap-2'>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>Health Insurance</h3>
                        <img src={HealthInsuranceImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>Life Insurance</h3>
                        <img src={LifeInsuranceImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>Home Insurance</h3>
                        <img src={HomeInsuranceImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>Travel Insurance</h3>
                        <img src={TravelInsuranceImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>Property Insurance</h3>
                        <img src={PropertyInsuranceImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>Fire Insurance</h3>
                        <img src={FireInsuranceImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>General / Motor Insurance</h3>
                        <img src={MotorInsuranceImage}/>
                    </div>
                </Link>
                </Card>
            </div>
        </div>
    </>
  )
}

export default InsuranceCards
