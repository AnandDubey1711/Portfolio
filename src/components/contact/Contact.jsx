import React from 'react'
import './contact.css'
import {AiOutlineMail,AiFillLinkedin,AiOutlineWhatsApp} from 'react-icons/ai';
import  { useRef } from 'react';

import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4mmxt8a', 'template_4fae80b', form.current, 'EHDnWa4qhTDGNOgRI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail classname="contact__option-icon" />
            <h4>Email</h4>
            <h5>ananddubey722@gmail.com</h5>
            <a href="mailto:ananddubey722@gmail.com" target='__blank'>Send a Message</a>
            
          </article>

          <article className='contact__option'>
            <AiFillLinkedin  classname="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Anand Dubey</h5>
            <a href="https://www.linkedin.com/in/anand-kumar-dubey-1223a0107" target='__blank'>Send a Message</a>
            
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp  classname="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+918800722538</h5>
            <a href="https://wa.me/918800722538" target='__blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact