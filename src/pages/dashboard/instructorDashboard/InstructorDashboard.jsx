import React from 'react';
import AddClassForm from './AddClassForm';
import MyClasses from "./MyClasses"
const InstructorDashboard = () => {
  return (
    <div>
      <h1 className='text-4xl text-center p-3'>Instructor Dashboard</h1>
      <AddClassForm></AddClassForm>
      <MyClasses></MyClasses>    
      </div>
  );
};

export default InstructorDashboard;