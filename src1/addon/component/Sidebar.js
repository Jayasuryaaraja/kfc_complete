import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className='side'>
        <h1>DASHBOARD</h1>
        <hr/>
        <ul>
            <li><Link to ="/Amenu" className='lin'>MENU</Link></li>
            <li><Link to ="/Deals" className='lin'>DEALS</Link></li>
            
        </ul>
    </div>
  )
}

export default Sidebar