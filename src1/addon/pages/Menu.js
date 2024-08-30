
import React, { useEffect, useState } from 'react'
import './Menu.css'
import Mproduct from '../products/Mproduct'
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, deletefromCart } from '../store/cartslice/Cartslice';
const Menu = () => {
    const cartproducts = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const addCart = (item) => {
      dispatch(addTocart(item));
    };
    const deleteCart = (item) => {
      dispatch(deletefromCart(item));
    };
    const [productsMenu,setProductsMenu] = useState([]);
    useEffect(()=>{
      fetch("http://localhost:5500/allproduct")
      .then((res)=> res.json())
      .then((data)=> {
        if (Array.isArray(data)) {
          setProductsMenu(data);
        }
      });
    });
    return(
      <>
       <div className="kfmenu">
        <h1>KFC MENU</h1>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <ul>
              <li>INTERNATIONALBURGERFEST</li><br></br>
              <li>MATCHDAY COMBO</li><br></br>
              <li>VALUE LUNCH SPECIAL</li><br></br>
              <li>BOX MEAL</li><br></br>
              <li>BURGER</li><br></br>
              <li>CHICKEN BUCKETS</li><br></br>
              <li>RICE BOWLZ</li><br></br>
              <li>VALUE SNACK</li><br></br>
              <li>CHICKEN ROLLS</li><br></br>
              <li>SNACKS</li><br></br>
            </ul>
          </div>
         
          <div className='col-lg-8'>
            <div className='row'>
              <div className= 'sr'>
            <input type="text" class="form-control" placeholder="search menu"/>
          <hr/>
            <h1>INTERNATIONAL BURGER FEST</h1>
            </div>
          
              {productsMenu.map((item)=>(
              <div className='col-lg-6'>
                <div className='card' key={item._id}> 
                  <img src={item.image} class="card-img-top" alt=''/>
                  <h5 class="card-title">{item.title}</h5>
                              <p class="card-text"> Non veg</p>
                              <p class="card-text">₹.{item.price}</p>
                           <p class="card-text">{item.ds}</p>   
                            {cartproducts.find((items)=> items._id===item._id)?(
                              <button className="btn btn-warning" onClick={()=> deleteCart(item)}>
                                Remove from cart
                              </button>):(
                              <button className="btn btn-success" onClick={()=> addCart(item)}>
                              Add to cart
                            </button>
                            )}
                </div>
              </div>
              ))}
            </div>
          </div>
  
        </div>
      

    </div>
    </>
  )
}

export default Menu
