import React from 'react';

// import StudentDashboard from './studentDashboard/StudentDashboard';
import useAdmin from '../../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import AdminDashboard from './adminDashboard/AdminDashboard';
import useInstructor from '../../hooks/useInstructor';
import Instructors from '../home/Instructors';
import InstructorDashboard from './instructorDashboard/InstructorDashboard';

const Dashboard = () => {
    const {user}= useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isInstructor, isInstructorLoading]=useInstructor(user?.email)
 
    return (
        <div>
            {/* <StudentDashboard></StudentDashboard> */}
            {isAdmin&& <AdminDashboard></AdminDashboard>}
            {isInstructor&& <InstructorDashboard></InstructorDashboard>}
        </div>
    );
};

export default Dashboard;