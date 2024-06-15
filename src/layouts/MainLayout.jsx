import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
    return (
        <div>
            <ScrollToTop/>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
