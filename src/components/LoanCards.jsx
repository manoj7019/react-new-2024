import React from 'react'
import Card from '../components/Card';
import Product from '../products.json';
import { Link } from 'react-router-dom';

const LoanCards = () => {
  return (
    <>
        <div className='flex-col my-10 mobile:mx-2 mx-10'>

            <h2 className='text-5xl font-bold my-10 text-center'>Loans</h2>
            {/* <p className='text-xl text-center mb-10'>Click on the type of loan below, fill the form and get approved.</p> */}
            <div className='grid grid-cols-5 laptop:grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2'>
            {Product.loans.map(loan =>
                <Card>
                    <Link to={`/loans/${loan.id}`}>
                            <div className='flex flex-col items-center'>
                                <h3 className='text-xl mobile:text-lg font-bold mb-1' key={loan.title}>{loan.title}</h3>
                                <img key={loan.img} src={loan.img}/>
                            </div>
                    </Link>
                </Card>
            )}
            </div>

        </div>
    </>
    )
}

export default LoanCards

{/* <div className='flex-col my-20 mx-10'>
            <h2 className='text-5xl font-bold my-10 text-center'>Loans</h2>
            <p className='text-xl text-center mb-10'>Click on the type of loan below, fill the form and get approved.</p>
            <div className='grid grid-cols-5 gap-2'>
                <Card>
                <Link to='/loans'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-xl font-bold mb-1'>Personal Loan</h3>
                        <img src={PersonalLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/insurance'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Business Loan</h3>
                        <img src={BusinessLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/itServices'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Home loan</h3>
                        <img src={HomeLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/contactUs'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Property loan</h3>
                        <img src={PropertyLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/contactUs'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Educational loan</h3>
                        <img src={EducationalLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/contactUs'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Professional loan</h3>
                        <img src={ProfessionalLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/contactUs'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Two wheeler loan</h3>
                        <img src={TwoWheelerLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/contactUs'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Car loan</h3>
                        <img src={CarLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/contactUs'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Electric vehicle loan</h3>
                        <img src={EVLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/contactUs'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Used vehicle loan</h3>
                        <img src={UsedVehicleLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/contactUs'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Overdraft and Cash Credit</h3>
                        <img src={ODLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/contactUs'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Commercial vehicle loan</h3>
                        <img src={CommercialVehicleLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/contactUs'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Machinery loan</h3>
                        <img src={MachineryLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/contactUs'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Balance transfer & Topup</h3>
                        <img src={TopupLoanImage}/>
                    </div>
                </Link>
                </Card>
                <Card>
                <Link to='/contactUs'>
                    <div className='flex flex-col items-center '>
                        <h3 className='text-xl font-bold mb-1'>Credit cards</h3>
                        <img src={CreditCardsLoanImage}/>
                    </div>
                </Link>
                </Card>
            </div>
        </div> */}
