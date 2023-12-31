import React from 'react';
import Navbar from '../components/common/Navbar';
import { Outlet } from "react-router-dom";
import Footer from '../components/common/Footer';

const Main = () => {
    return (
        <div className='max-w-5xl'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;