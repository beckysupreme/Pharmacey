import React from 'react';
import '../Path/Home.css';
import pharmacyImage from '../assets/phar.jpg';
import pharmacyImage1 from '../assets/phar1.jpg';
import pharmacey from '../assets/phar3.jpg';


export default function Home() {
  return (

    <div className="Homepage">
        <h1>Welcome to the Home Page</h1>
        <p>We are dedicated to providing the best pharmacy services.</p>
        <img src={pharmacey} alt='pharmacy' className='store'/><br/>
        <img src={pharmacyImage} alt='Pharmacy' className='home-page'/><br/>
        <img src={pharmacyImage1} alt='Pharmacy' className='img'/>
    </div>
  )
}
