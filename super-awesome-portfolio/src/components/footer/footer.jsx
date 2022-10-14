import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>JonBluntJovi</a>
        <ul className='permalinks'>
          <li><a href="#"> Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio"> Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
          <a href="https://www.facebook.com/jon.cerruti"target="_blank"> <BsFacebook /></a>
          <a href="https://www.instagram.com/jon_blunt_jovi/"target="_blank"> <BsInstagram /></a>
          <a href="https://twitter.com/jonbluntjovi"target="_blank"> <BsTwitter /> </a>
          <a href="https://www.linkedin.com/in/jonathan-cerruti-a1b8a41b9/"target="_blank"> <BsLinkedin /> </a>
          <a href="https://github.com/JonCerruti"target="_blank"> <FaGithub /> </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; JonBluntJovi Creations. Allrights reserved.</small>
        </div>
      </footer>
  )
}

export default footer