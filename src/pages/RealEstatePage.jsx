import React from 'react'
import RealEstateCards from '../components/RealEstateCards';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';

const RealEstatePage = () => {
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
      <RealEstateCards />
    </div>
  )
}

export default RealEstatePage
