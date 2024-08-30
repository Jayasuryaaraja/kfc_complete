import React from 'react'
import './Navbar.css'
import Kfclogo from '../images/Kfclogo.svg'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import Bucket from '../images/Bucketcart.svg'
const Navbar = () => {
  return (
    <div>
        <div class ="location">
        <div className='loci'><FaLocationDot /> </div><p>Allow location access for local store menu and promos </p>
        <button>Set loaction</button>
        <Link to='/Admin'><button>ADMIN</button></Link>
    </div>
    <hr/>
    <div class="log">
        <Link to ='/'><img src={Kfclogo}/></Link>
        <ul>
            <li><Link to="/menu" className='lin'>MENU</Link></li>
            <li><Link to="deals" className='lin'>DEALS</Link></li>
        </ul>
        <i></i>
       <Link to="/usign" className='lin'><h4><FaUserPlus />Sign in</h4></Link>
       <vr></vr>
      <Link to='/Cart'> <img src={Bucket}/></Link>
       </div>
       <hr/>
       <div class="order">
        <p>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p>
        <button>Start Order</button>
       </div>
       <hr/>
    </div>
  )
}

export default Navbar