import React from 'react'
import ItServicesCards from '../components/ItServicesCards';
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';

const ItServicesPage = () => {
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
      <ItServicesCards/>
    </div>
  )
}

export default ItServicesPage
