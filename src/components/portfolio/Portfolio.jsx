import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/CryptoDash.jpg';
import IMG2 from '../../assets/Dashboard.jpg';
import Blog from '../../assets/Blog.png';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/Amazon_Web_Scraper_Api.png';
import IMG6 from '../../assets/Climate_Change_News_Api.png';
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG1} alt=""/>
          </div>
            <h3>CyptoDash DashBoard</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/CryptoDash-DashBoard' className='btn' target='__blank'>GitHub</a>
            <a href='https://cyrptodash-project.herokuapp.com/' className='btn btn-primary' target='__blank'>Live Demo</a>
            </div></article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG2} alt=""/>
          </div>
            <h3>React Admin DashBoard</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/react-admin-dashboard' className='btn' target='__blank'>GitHub</a>
            <a href='https://ananddubey1711.github.io/react-admin-dashboard/' className='btn btn-primary' target='__blank'>Live Demo</a>
    </div></article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={Blog} alt=""/>
          </div>
            <h3>Blogging Webapp</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/The_Happy_Blog_Path' className='btn' target='__blank'>GitHub</a>
            <a href='https://the-happy-path-s37d.vercel.app/' className='btn btn-primary' target='__blank'>Live Demo</a>
            </div> </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG4} alt=""/>
          </div>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711' className='btn' target='__blank'>GitHub</a>
            <a href='https://dribbble.com/search/alien-pixels' className='btn btn-primary' target='__blank'>Live Demo</a>
            </div> </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG5} alt=""/>
          </div>
            <h3>Amazon Web Scraper Api</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/Amazon-Web-Scraper-Api' target='__blank' className='btn'>GitHub</a>
            <a href='https://rapidapi.com/ananddubey722/api/amazon-scraper-api2' className='btn btn-primary' target='__blank'>Live Demo</a>
            </div></article>  <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG6} alt=""/>
          </div>
            <h3>Climate Change News Api</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/Climate_Change_News_Api' target='__blank' className='btn'>GitHub</a>
            <a href='https://rapidapi.com/ananddubey722/api/climate-change-news115' className='btn btn-primary' target='__blank'>Live Demo</a>
       </div>
        </article>
      </div>

      
    </section>
  )
}

export default Portfolio