import React from 'react';
import InstructorDashboard from './instructorDashboard/InstructorDashboard';
import AdminDashboard from './adminDashboard/AdminDashboard';
import StudentDashboard from './studentDahsboard/StudentDashboard';

const Dashboard = () => {
    const role = "student"
    return (
        <div>
            <StudentDashboard></StudentDashboard>
            {/* <InstructorDashboard></InstructorDashboard>
            <AdminDashboard></AdminDashboard> */}
        </div>
    );
};

export default Dashboard;