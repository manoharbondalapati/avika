import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
  return (
    <div id='body'>
      <div className='container'>
        <h1>Welcome!!<span id='plus'>&#43;</span></h1>
        <h2>In matters of truth and justice, 
            there is no difference between large and small problems, 
            for issues concerning the treatment of people are all the same.</h2>
        </div>
        <div className='divs'>
         <div id='userdiv'>
         <Link to='/userpage'><Button variant="primary">Book Appointment</Button></Link>
         </div>
         <div id='admindiv'>
         <Link to='/adminlogin'><Button variant="primary">AdminLogin</Button></Link> 
         </div>

         </div>
    </div>
   
 )
}

export default HomePage
