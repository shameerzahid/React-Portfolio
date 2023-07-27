import React, { useEffect } from 'react';
import Typed from 'react-typed'
import './Header.css'
import CTA from  './CTA'
import shameer from '../../assets/shameer.png'
import HeaderSocials from './HeaderSocials'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in',
      once: true,
    });
  }, []);
  const roles = ['Shameer Zahid', 'Software Engineer'];
  return (
 
    <header data-aos="fade-in">
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1 className='text-head'>
           <Typed strings={roles} typeSpeed={100} backSpeed={50} loop />
        </h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
         <HeaderSocials />
        <div className="me">
          <img className='shameer' src={shameer} alt="ME" />
        </div>
       
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
