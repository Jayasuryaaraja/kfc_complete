import React from 'react'
import './Home.css'
import Himg from '../images/Himg.webp'
import Internburger from '../images/Internburger.jpg'
import Matchday from '../images/Matchday.jpg'
import Valuesnack from '../images/Valuesnack.jpg'
import Boxmeal from '../images/Boxmeal.jpg'
import Fifth from '../images/Fifth.jpg'
import Chickenbucketds from '../images/Chickenbucketds.jpg'
import Ricebowlz from '../images/Ricebowlz.jpg'
import Viewall from '../images/Viewall.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="pic">
        <Link to="/menu"><img src={Himg}/></Link>
       </div>
       <div className="browse">
        <h1>BROWSE CATEGORIES</h1>
       </div>
       <div className="container-fluid">
        <div className="rw">
            <div className="col-lg-3 in"><div className="card">
                <img src={Internburger} className="card-img-top" alt="..."/>
                <div className="card-body">
                 <Link to='/menu' className='lin'> <h5 className="card-title">INTERNATIONAL BURGER</h5></Link>
                  
                </div>
              </div></div>
            <div className="col-lg-3 match"><div className="card">
                <img src={Matchday}className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">MATCH DAY</h5>
                  
                </div>
              </div></div>
            <div className="col-lg-3 lunnch"><div className="card">
                <img src={Valuesnack} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">VALUE LUNCH SPECIALS</h5>
                  
                </div>
              </div></div>
            <div className="col-lg-3 meal"><div className="card">
                <img src={Boxmeal} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">BOX MEALS</h5>
                  
                </div>
              </div></div>  
            </div>
              <div className="rw1">
              <div className="col-lg-3"><div className="card" >
                <img src={Fifth} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">BURGERS</h5>
                  
                </div>
              </div></div>
              <div className="col-lg-3"><div className="card" >
                <img src={Chickenbucketds} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">CHICKEN BUCKETS</h5>
                  
                </div>
              </div></div>
              <div className="col-lg-3"><div className="card" >
                <img src={Ricebowlz} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">RICE BOWLS</h5>
    
                </div>
              </div></div>
              <div className="col-lg-3"><div className="card">
                <img src={Viewall} className="card-img-top" alt="..."/>
                <div className="card-body">

                </div>
              </div></div>
            </div>
             
      
    </div>
    </div>
  )
}

export default Home