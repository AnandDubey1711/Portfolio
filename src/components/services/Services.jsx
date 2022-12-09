import React from 'react'
import './services.css';
import {AiOutlineCheck} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>WEB DEVELOPMENT</h3>
            </div>
            <ul className='service__list'>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>Webapps Using ReactJS </p>
              </li>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>HTML/CSS/JS</p>
              </li>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>Web Scraping</p>
              </li>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>API Development via NodeJS</p>
              </li>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>Database Creation</p>
              </li>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>SQL & NoSQL Database</p>
              </li>
            </ul>
          
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>SOFTWARE DEVELOPMENT</h3>
            </div>
            <ul className='service__list'>
            <li><AiOutlineCheck className='service__list-icon'/>
              <p>Using Java and JavaScript for Development</p>
              </li>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>Proficient in DSA and OOPs</p>
              </li>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>Effective Communication & Problem solving</p>
              </li>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>Database Development and Management</p>
              </li>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>Adeqaute Knowledge of Git/Github</p>
              </li>
            
            </ul>
          
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>BACKEND DEVELOPMENT</h3>
            </div>
            <ul className='service__list'>
            <li><AiOutlineCheck className='service__list-icon'/>
              <p>Using JS and Java for Development</p>
              </li>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>NodeJS for API Development</p>
              </li>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>Database Administration</p>
              </li>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>Deployment and Hosting</p>
              </li>
              <li><AiOutlineCheck className='service__list-icon'/>
              <p>Using Git for Development</p>
              </li>
              </ul>
        
        </article>

       


      </div>
    </section>
  )
}

export default Services