import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
// import {MdDesignServices} from 'react-icons/md';
import { useState } from 'react'
import {IoMdContact} from 'react-icons/io';
import {AiFillProject} from 'react-icons/ai';

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#header');
  return (
   <nav >
    <a href='#header' onClick={()=>setActiveNav('#header')} className={activeNav=== '#header'?'active':''}><AiOutlineHome/></a>
    <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about'?'active':''}><AiOutlineUser/></a>
    <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'?'active':''}><BiBook/></a>
    {/* <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav === '#services'?'active':''}><MdDesignServices/></a> */}
    <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio'?'active':''}><AiFillProject/></a>
    
    <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><IoMdContact/></a>
   </nav>
  )
}

export default Nav