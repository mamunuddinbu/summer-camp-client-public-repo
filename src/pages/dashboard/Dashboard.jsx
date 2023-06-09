import React from 'react';

import StudentDashboard from './studentDashboard/StudentDashboard';

const Dashboard = () => {
    const role = "student"
    return (
        <div>
            <StudentDashboard></StudentDashboard>
        </div>
    );
};

export default Dashboard;