import React from 'react';
import Hero from '../components/Hero';
import { Suspense } from 'react';
import HomeCards from '../components/HomeCards';
const OurPartners = React.lazy(() => import('../components/OurPartners'));
import {useState, useEffect} from 'react'
import Loader from '../components/Loader';

const HomePage = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500)
  // }, [])

  // if(isLoading) {
  //   return <Loader />
  // }

  return (
    <>
        <Hero />
        <HomeCards />
        <Suspense fallback={<Loader/>}>
          <OurPartners />
        </Suspense>
    </>
  )
}

export default HomePage
