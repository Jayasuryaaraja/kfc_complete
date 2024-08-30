import React from 'react'
import kfclogo from '../images/Kfclogo.svg'
import './Usign.css'
import { Link } from 'react-router-dom'
const Usign = () => {
  return (
    <div className='sin'>
        <div className='h'>
        <h5>Sign In / Sign up</h5>
        </div>
        <div className='ll'>
        <Link to="/"><img src={kfclogo}/></Link>
        </div>
        <div className='titl'>
            <p>LET'S SIGN  IN OR CREATE ACCOUNT WITH YOUR PHONE<br/> </p>
            <div className='p'>        
                 <p> NUMBER!</p></div>
        </div>
        <div className='sfor'>
            <input type="number" class = "form-control" placeholder="Phone Number*"/>
        </div>
        <div className='wd'>
            <p>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.
            </p>
        </div>
        <div className='btt'>
            <button>Send Me a Code</button>
        </div>
        <div className='o'>
            <p>or</p>
        </div>
        <div className='bbt'>
            <Link to="/menu"><button>Skip,Continue As Guest </button></Link>
        </div>

    </div>
  )
}

export default Usign