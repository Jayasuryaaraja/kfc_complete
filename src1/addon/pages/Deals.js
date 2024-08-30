import React from 'react'
import A1 from '../images/Valuesnack.jpg'
import Dproducts from '../products/Dproducts'
import A2 from '../images/Ndimg.webp'
import './Deals.css'
const Deals = () => {
  return (
    <div>
      <div className='dim'>
        <img src={A2} alt=''/>
      </div>
      <div class="li">
        <ul>
          <li><h3>NATIONAL OFFER</h3></li>
        </ul>
        </div>
      
      <div class="container">
          <div class="row">
            {Dproducts.map((item)=>(
            <div class="col-lg-4"><div class="card" key={item.id}>
              <img src={item.image} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <p class="card-text">{item.ds}</p>
                <p class="card-text">special price-Rs:{item.price}</p>
              </div>
            </div></div>
))}
            </div>
</div>
<div class="logn">
        <button>load more</button>
       </div>
       <div class="view">
        Viewed 9 of 14
       </div>
    </div>
  )
}

export default Deals