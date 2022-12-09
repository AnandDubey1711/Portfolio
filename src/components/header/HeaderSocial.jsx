import React from 'react'
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs'
import './header.css';


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/anand-kumar-dubey-1223a0107' ><BsLinkedin/></a>
        <a href='https://github.com/AnandDubey1711' ><BsGithub/></a>
        <a href='https://dribble.com'><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocial