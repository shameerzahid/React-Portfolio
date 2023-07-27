import React, { useEffect } from 'react'
import './About.css'
import Me from '../../assets/mehere.jpg'
import {PiStudent} from 'react-icons/pi'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in',
      once: true,
    });
  }, []);
  return (
    <section id='about' data-aos="fade-in">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-img' >
            <img src={Me} alt="aBOUT imge" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <PiStudent  className='about__icon'/>
              <h5>Education</h5>
              <small>BS Software Engineering</small>
            </article>

             <article className="about__card">
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>Diverse Projects</small>
            </article>

             <article className="about__card">
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ already completed</small>
            </article>
          </div>
          <p>Highly motivated Software Engineer who has recently graduated from UET Taxila, specializing in 
            cutting-edge technologies and innovative solutions. Throughout my academic journey, I honed my skills in
           MERN stack development and As a tech enthusiast, I thrive on exploring emerging technologies.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
