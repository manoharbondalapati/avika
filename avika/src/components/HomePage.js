import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Card} from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <div className='container'>
        <h1>Welcome!!<span id='plus'>&#43;</span></h1>
        <h2>In matters of truth and justice, 
            there is no difference between large and small problems, 
            for issues concerning the treatment of people are all the same.</h2>
        </div>
        {/* <div className='cards'>
        <Card style={{ width: '18rem' }} id='card1'>
      <Card.Img variant="top" src="https://res.cloudinary.com/dpfnyv0ut/image/upload/v1709258193/img1_n5jtd3.jpg" />
      <Card.Body id='user'>
      <Link to='/userpage'><Button variant="primary">Book Appointment</Button></Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} id='card2'>
      <Card.Img variant="top" src="https://res.cloudinary.com/dpfnyv0ut/image/upload/v1709258515/img2_lnqtvn.webp" />
      <Card.Body id='admin'>
      <Link to='/adminlogin'><Button variant="primary">AdminLogin</Button></Link>
      </Card.Body>
    </Card>
        </div>
      */}
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
