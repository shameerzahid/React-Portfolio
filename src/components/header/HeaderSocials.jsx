import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/shameer-zahid-940293247" target="_blank"><BsLinkedin className='socials' /> </a>
      <a href="https://github.com/shameerzahid" target="_blank"><FaGithub className='socials' /> </a>
      <a href="https://www.facebook.com/profile.php?id=100010870507739" target="_blank"><FaFacebook className='socials' /></a>
    </div>
  )
}
 
export default HeaderSocials
