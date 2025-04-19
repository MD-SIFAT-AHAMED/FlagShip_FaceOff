import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import { Outlet } from 'react-router';
const MainLayOut = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-[calc(100vh-116px)]'>
                <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
                    <Outlet />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayOut;