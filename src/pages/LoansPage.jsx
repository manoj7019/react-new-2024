import React from 'react';
import LoanCards from '../components/LoanCards';
import Loader from '../components/Loader';
import {useState, useEffect} from 'react'

const LoansPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500)
  }, [])

  if(isLoading) {
    return <Loader />
  }
  return (
    <>
        <LoanCards />
    </>
  )
}

export default LoansPage
