import React from 'react'
import './about.css';
import ME from '../../assets/photostudio-2-designify.png';
import {FaAward} from 'react-icons/fa';
import {HiUsers} from 'react-icons/hi'
import {RiFolderFill} from 'react-icons/ri';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='AboutImage'/>
          </div>
        </div>

          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
              <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
              
              <article className='about__card'>
              <HiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>20+ Worldwide</small>
              </article>

              <article className='about__card'>
              <RiFolderFill className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>
            
            <p>
             Hello there, I am a MERN Stack Developer with a growing mindset to polish my skills more and more by each passing day
             . I like to do project based learning instead of going through tutorial hell and have built several projects in different 
             domain such as game, finance, health based webapps and i am looking forward to learn React-Native to build mobile apps as well.
            </p>
              
              <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About