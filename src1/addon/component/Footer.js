import React from 'react'
import './Footer.css'
import Footkfc from '../images/Footkfc.svg'
import Footgoogle from '../images/Footgoogle.svg'
import Footaple from '../images/Footaple.svg'
import { FaInstagram } from "react-icons/fa6"
import { CiFacebook } from "react-icons/ci"
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <div class="footer">
        <div class="footer1">
        <div class="footimg">
        <Link to="/"><img src={Footkfc} alt=".."/></Link>
        </div>
        <div class="fotlist">
        <ul>
            <li>KFC India</li>
            <li>About KFC</li>
            <li>KFC care</li>
            <li>Carrers</li>
            <li>Our Golden Past</li>
        </ul>
        <ul>
            <li>Legal</li>
            <li>Terms and Conditions</li>
            <li>Privacy and policy</li>
            <li>Disclaminar</li>
            <li>Caution Note</li>
        </ul>
        <ul>
            <li>KFC Food</li> 
            <li>Menu</li>
            <li>Order Lookup</li>
            <li>Gift Card</li>
            <li>Nutrition & Allergian</li>
        </ul>
        <ul>
            <li>Support</li>
            <li>Get Help</li>
            <li>Contact Us</li>
            <li>KFC Feedback</li>
            <li>Privacy and Policy</li>
        </ul>
        </div>
        <div clas="fotkind">
        <h5><FaLocationDot />Find a KFC</h5>
        </div>
        <div class="footer2">
       <a href='https://play.google.com/store/apps/details?id=com.yum.kfc&pli=1'> <img src={Footgoogle} alt=".."/></a>
       <a href='https://apps.apple.com/in/app/kfc-india-online-ordering-app/id915824379'> <img src={Footaple} alt=".."/></a>
      </div>
        
    </div>

    <div class="para">
        <p>Copyright © KFC Corporation 2024 All rights reserved</p>
        </div>
        <div class="ikon">
        <a href='https://www.instagram.com/kfcindia_official/'><FaInstagram /></a>
        <a href='https://www.facebook.com/KFCIndia'><CiFacebook /></a>
         <a href='https://x.com/KFC_India'><FaXTwitter /></a>
        </div>
    </div>
    </div>
  )
}

export default Footer