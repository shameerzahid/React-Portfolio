import React, { useEffect } from 'react'
import './Portfolio.css'
import img1 from '../../assets/p1.JPG'
import img2 from '../../assets/p2.JPG'
import img3 from '../../assets/p3.JPG'
import img4 from '../../assets/p4.JPG'
import img5 from '../../assets/p5.JPG'
import img6 from '../../assets/p6.JPG'
import AOS from 'aos';
import 'aos/dist/aos.css';
const data = [
  {
    id: 1,
    image: img1,
    title: 'Modern Tenzies Game',
    github: 'https://github.com/shameerzahid/React-Game-Tenzies',
    demo:   'https://netlify-game.netlify.app/'
  }, {
    id: 2,
    image: img2,
    title: 'Online Text Editor',
    github: 'https://github.com/shameerzahid/React-Text-Editor',
    demo: "https://on-text-editor.netlify.app/"
  },
   {
    id: 3,
    image: img3,
    title: 'Meme Generator',
    github: 'https://github.com/shameerzahid/React-Meme-Generator',
    demo: "https://memes-place.netlify.app/"
  },
   {
    id: 4,
    image: img4,
    title: 'Chatting App Full-Stack',
    github: 'https://github.com/shameerzahid/MERN-Chatting-App-fullstack'
  },
   {
    id: 5,
    image: img5,
    title: 'WEBTRC Full-Stack',
    github: 'https://github.com/shameerzahid/MERN-WEBTRC-Tutorial'
  },
   {
    id: 6,
    image: img6,
    title: 'AI Integration Full-Stack',
    github: 'https://github.com/shameerzahid/MERN-AI-integration'
  }
]
const Portfolio = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: 'ease-in',
      once: true,
    });
  }, []);
  return (
    <section id='portfolio' data-aos="fade-in">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=> {
            return( <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="img" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target="_blank">Github</a>
            {
              demo &&  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
            }
         
          </div>
        </article> )
          })
        }
       
      </div>
    </section>
  )
}

export default Portfolio
