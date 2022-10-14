import React, {useState} from 'react'
import './nav.css'
import {BiHomeSmile} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBook} from 'react-icons/fi'
import {BiMessageDots} from 'react-icons/bi'
import { BsBook } from 'react-icons/bs'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}className= {activeNav === '#' ? 'active' : ''}><BiHomeSmile/></a>
      <a href='#about' onClick={() => setActiveNav('#about')}className= {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')}className= {activeNav === '#experience' ? 'active' : ''}><FiBook/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')}className= {activeNav === '#portfolio' ? 'active' : ''}><BsBook/></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')}className= {activeNav === '#contact' ? 'active' : ''}><BiMessageDots/></a>
    </nav>
  )
}

export default Nav