import React, { useEffect } from 'react'
import './Footer.css'
import {FaInstagram} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
     useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
      easing: 'ease-in',
      once: true,
    });
  }, []);
  return (
    <footer data-aos="slide-up">
      <a href="#" className='footer__logo'>Shameer Zahid</a>
      <ul className="permalinks">
   <li><a href="#">Home</a></li>
       <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
         <li><a href="#portfolio">portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
   <div className="footer__socials">
    <a href="https://www.linkedin.com/in/shameer-zahid-940293247" target="_blank"><BsLinkedin /> </a>
     <a href="https://github.com/shameerzahid" target="_blank" ><FaGithub /> </a>
      <a href="https://instagram.com/ishameer_?igshid=MzNINGNkZWQ4Mg==" target="_blank"><FaInstagram /> </a>
   </div>
   <div className="footer__copyright">
    <small>&copy; SHAMEER ZAHID, All rights reserved</small>
   </div>
    </footer>
  )
}

export default Footer
