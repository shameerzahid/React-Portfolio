import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
      useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in',
      once: true,
    });
  }, []);
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fvp9dal', 'template_fnms6td', form.current, 'tj9wbB7dzBo1-ZP9-')
    e.target.reset();
  };
  return (
    <section id='contact' data-aos="fade-down">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Shameerzahid11@gmail.com</h5>
            <a href="mailto:shameerzahid11@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Shameer Zahid</h5>
            <a  href="https://www.facebook.com/profile.php?id=100010870507739" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+923105232553</h5>
            <a href="https://api.whatsapp.com/send?phone=+923105232553" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
