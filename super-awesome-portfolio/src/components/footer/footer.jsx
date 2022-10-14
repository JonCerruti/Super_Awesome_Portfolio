import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

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
          <a href="facebook.com"> <BsFacebook /></a>
          <a href="instagram"> <BsInstagram /></a>
          <a href="twitter"> <BsTwitter /> </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; JonBluntJovi Creations. Allrights reserved.</small>
        </div>
      </footer>
  )
}

export default footer