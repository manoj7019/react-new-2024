import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
    const[isLoading, setIsLoading] = useState(true);

    const handleLoading = () => {
        setIsLoading(false);
    }

    useEffect(() =>{
        window.addEventListener('load', handleLoading);
        return () => window.removeEventListener('load', handleLoading);
    }, []);

    return !isLoading ? (
        <div>
            <ScrollToTop/>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    ) : (<Loader />)
}

export default MainLayout
