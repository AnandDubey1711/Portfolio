import React from 'react'
import './header.css'
import CTA from './CTA';
import ME from '../../assets/dev-ed-wave.png';
import HeaderSocial from './HeaderSocial';
const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <h5>Hey there I'm </h5>
        <h1>Anand Dubey</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA/>
        <HeaderSocial/>
       <div className='me'>
        <img src={ME} alt='me'/>
       </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>        
      </div>
    </header>
  )
}

export default Header