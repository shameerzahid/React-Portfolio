import React, { useEffect } from 'react'
import {BiCheck} from 'react-icons/bi'
import './Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
       useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in',
      once: true,
    });
  }, []);
  return (
    
    <section id='services' data-aos="fade-up">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Build Modern Websites using React</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Style Components using CSS3</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Chakra UI, Tailwind CSS and Bootstrap</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Involve React Router, React Hooks, State Handling.</p>
            </li>
          </ul>
        </article>

         <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Develop backend API's using Node js</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Also Involve Express JS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MONGODB</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Third party packages</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Also write queries in SQL(Relational DB)</p>
            </li>
          </ul>
        </article>

         <article className="service">
          <div className="service__head">
            <h3>Other Services</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UI/UX</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>implementation of Object Oriented Programming</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data Structures</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cloud Computing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MS Office</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
