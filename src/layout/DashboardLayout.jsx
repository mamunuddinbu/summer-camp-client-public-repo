import React from 'react';
import Dashboard from '../pages/dashboard/Dashboard';
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;