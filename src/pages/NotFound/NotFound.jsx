import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
// import useTitle from '../../hooks/useTitle';

const NotFound = () => {
  useTitle('404')
    return (
        <div className="container text-center"
    style={{
      backgroundImage: `url(https://www.hopetutors.com/wp-content/uploads/2016/10/404.gif)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      minHeight: "100vh",
    }}>
        <h1>Opps!!!</h1>
      
      <p className="lead">Page not found</p>
      <button className='btn bg-yellow-300 text-black'><Link to={'/'}>Go to Home</Link></button>
    </div>
    );
};

export default NotFound;