import React, { useEffect } from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Experience = () => {
     useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in',
      once: true,
    });
  }, []);
  return (
    <section id='experience'  data-aos="fade-down">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              <small className='text-light '>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
              <small className='text-light '>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
               <h4>Javascript</h4>
              <small className='text-light '>Experienced</small>
             </div>
            </article>
                      <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              <small className='text-light '>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
               <h4>Bootstrap</h4>
              <small className='text-light '>Experienced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
               <h4>Tailwind CSS</h4>
              <small className='text-light '>Intermediate</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
               <h4>Chakra UI</h4>
              <small className='text-light '>Intermediate</small>
             </div>
            </article>
          </div>
          </div>
           <div className="experience__frontend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
               <h4>Node JS</h4>
              <small className='text-light '>Intermediate</small>
             </div>
            </article>
             <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
               <h4>Express JS</h4>
              <small className='text-light '>Intermediate</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
              <small className='text-light '>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
              <small className='text-light '>Intermediate</small>
              </div>
            </article>
           
          </div>
          </div>
             <div className="experience__frontend">
          <h3>Other Skills</h3>
          <div className="experience__content">
            <article className="experience__details other">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div >
                <h4>OOP</h4>
              </div>
            </article>
            <article className="experience__details other">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4  >Java</h4>
              </div>
            </article>
            <article className="experience__details other">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
               <h4 >C++</h4>
             </div>
            </article>
                      <article className="experience__details other">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4  >Data Structures</h4>
              </div>
            </article>
            <article className="experience__details other">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
               <h4  >Quick Learner</h4>
             </div>
            </article>
            <article className="experience__details other">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
               <h4 >Critical Thinking</h4>
             </div>
            </article>
             <article className="experience__details other">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div >
               <h4>Collaboration</h4>
             </div>
            </article>
            <article className="experience__details  other">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
               <h4>Microsoft Office</h4>
             </div>
            </article>
          </div>
          </div>
          </div>
    </section>
  )
}

export default Experience
