import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" style={{width:"300px"}}/>
            <p>Welcome to the ultimate chill zone — jahaan chai ki garmaahat, coffee ki kick, aur fast food ka desi swag milta hai full-on Rasta vibe ke saath! Whether you’re craving a tandoori sandwich, a kadak kulhad wali chai, ya ek strong espresso shot, yahan har sip aur bite mein hai one love, one flavor. Humare café ka scene hai simple — fast bites, slow vibes, aur full-on desi reggae feel. So drop by, relax, and feel the flavour, feel the vibe!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 7085510991</li>
                <li>contact@rastacafe.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © RastaCafe.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
