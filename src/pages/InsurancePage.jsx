import React from 'react'
import InsuranceCards from '../components/InsuranceCards';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';

const InsurancePage = () => {
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
    <div>
        <InsuranceCards />
    </div>
  )
}

export default InsurancePage
