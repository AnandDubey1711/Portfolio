import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#header' className='footer__logo'>BOTBOY</a>
      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Porfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul> 
      <div className='footer__copyright'>
        <small>&copy; BOTBOY WORKS. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer