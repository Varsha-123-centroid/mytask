import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  return (
    
    <nav>
      {/* <ul>
         <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )} 
      </ul> */}
    </nav>
 
  )
}

export default Navbar