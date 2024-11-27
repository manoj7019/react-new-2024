import React from 'react'
import { useState } from 'react'
// import IndPartnerForm from './Partner/IndPartnerForm'
import LoanDetailsForm from './Form'
// import IndPartnerDocs from './Partner/IndPartnerDocs'
// import CompPartnerForm from './Partner/CompPartnerForm'
// import CompPartnerDocs from './Partner/CompPartnerDocs'
import { Link } from 'react-router-dom'


const BecomeAPartner = () => {

    const[showIndividual, setShowIndividual] = useState(false)
    const[showCompany, setShowCompany] = useState(false)

    function handleSetShowCompany() {
        setShowCompany(!showCompany)
    }

    function handleSetShowIndividual() {
        setShowIndividual(!showIndividual)
    }
    
  return (
    <>
      <div className='flex flex-col items-center'>
      <h1 className='laptop:mt-28 mobile:mt-20 text-center text-4xl font-bold'>Become a partner with us</h1>  
      <p className='mx-10 my-2 text-center text-xl'>and start making too much money right now!!!</p>
      <button className='bg-blue-500 laptop:mx-auto mobile:m-10 laptop:text-3xl mobile:text-2xl text-white laptop:px-10 mobile:px-6 py-2 rounded-3xl' 
        onClick={handleSetShowIndividual}>
        Partner as <b>Individual</b>
      </button>
      { showIndividual &&
      <>
        <LoanDetailsForm />
        <Link to='/success'>
          <button className='laptop:m-10 mobile:m-10 bg-blue-500 laptop:mx-auto mobile:mx-20 px-10 py-2 text-white text-2xl rounded-3xl font-medium'> Proceed </button>
        </Link>
      </>
      }

      {/* <h1 className='text-center text-3xl font-medium'>or</h1> */}

      <button className='m-5 bg-blue-500 laptop:mx-auto mobile:mx-10 laptop:text-3xl mobile:text-2xl text-white laptop:px-10 mobile:px-6 py-2 rounded-3xl'
      onClick={handleSetShowCompany}>Partner as <b>Company</b></button>
      { showCompany &&
      <>
        <LoanDetailsForm />
        <Link to='/success'>
          <button className='laptop:m-10 mobile:m-10 bg-blue-500 laptop:mx-auto mobile:mx-20 px-10 py-2 text-white text-2xl rounded-3xl font-medium'> Proceed </button>
        </Link>
      </>
      }
      </div>
    </>
  )
}

export default BecomeAPartner
