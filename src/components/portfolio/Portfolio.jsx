import React from 'react'
import './portfolio.css';
// import IMG1 from '../../assets/CryptoDash.jpg';
import IMG2 from '../../assets/Dashboard.jpg';
import Blog from '../../assets/Blog.png';
import IMG5 from '../../assets/Amazon_Web_Scraper_Api.png';
import IMG6 from '../../assets/Climate_Change_News_Api.png';
import IMG7 from '../../assets/Screenshot (150) (1).png';
import IMG8 from '../../assets/Screenshot (151).png';
import IMG9 from '../../assets/227828856-ce4dab6c-d957-4744-b1de-8232062c05c7 (1).jpeg';
import IMG10 from '../../assets/Screenshot (152).png';
import IMG11 from '../../assets/Screenshot (153).png';
import IMG12 from '../../assets/Screenshot (154).png';
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>

        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG1} alt=""/>
          </div>
            <h3>CyptoDash DashBoard</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/CryptoDash-DashBoard' className='btn' target='__blank'>GitHub</a>
            <a href='https://cyrptodash-project.herokuapp.com/' className='btn btn-primary' target='__blank'>Live Demo</a>
            </div></article> */}

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG7} alt=""/>
          </div>
            <h3>ALGO.IO</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/ideax' className='btn' target='__blank'>GitHub</a>
            <a href='https://cyrptodash-project.herokuapp.com/' className='btn btn-primary' target='__blank'>Live Demo</a>
            </div></article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG2} alt=""/>
          </div>
            <h3>React Admin DashBoard</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/react-admin-dashboard' className='btn' target='__blank'>GitHub</a>
            <a href='https://ideax-umber.vercel.app/' className='btn btn-primary' target='__blank'>Live Demo</a>
    </div></article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={Blog} alt=""/>
          </div>
            <h3>Blogging Webapp</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/The_Happy_Path_Blog' className='btn' target='__blank'>GitHub</a>
            <a href='https://the-happy-path.netlify.app/' className='btn btn-primary' target='__blank'>Live Demo</a>
            </div> </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG8} alt=""/>
          </div>
            <h3>ToDo List</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/todoList' className='btn' target='__blank'>GitHub</a>
            <a href='https://phenomenal-chimera-735a9b.netlify.app/' className='btn btn-primary' target='__blank'>Live Demo</a>
            </div> </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG9} alt=""/>
          </div>
            <h3>FindJobs</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/FindJobs' className='btn' target='__blank'>GitHub</a>
            <a href='https://expo.dev/%40anand1711/jobsift?serviceType=eas&distribution=expo-go&scheme=exp%2Bjobsift&channel=main&sdkVersion=48.0.0' className='btn btn-primary' target='__blank'>Live Demo</a>
            </div> </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG10} alt=""/>
          </div>
            <h3>Payment UI Website</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/Payment_UI_Website' className='btn' target='__blank'>GitHub</a>
            <a href='https://payment-app-ui.netlify.app/' className='btn btn-primary' target='__blank'>Live Demo</a>
            </div> </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG11} alt=""/>
          </div>
            <h3>Movie App</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/MovieApp' className='btn' target='__blank'>GitHub</a>
            <a href='https://main--steady-tulumba-fe722d.netlify.app/' className='btn btn-primary' target='__blank'>Live Demo</a>
            </div> </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={IMG12} alt=""/>
          </div>
            <h3>JS Projects</h3>
            <div className='portfolio__item-cta'><a href='https://github.com/AnandDubey1711/JS_Projects' className='btn' target='__blank'>GitHub</a>
            <a href='https://js-project-akd.netlify.app/' className='btn btn-primary' target='__blank'>Live Demo</a>
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
