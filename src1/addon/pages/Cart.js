import React from 'react'
import './Cart.css'
import { deletefromCart, updateQuantity } from '../store/cartslice/Cartslice';
import { useDispatch, useSelector } from 'react-redux';


const Cart = () => {
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const deleteCart = (item) => {
        dispatch(deletefromCart(item))
    };
    const incrementCart = (id,quantity) => {
        dispatch(updateQuantity({id,quantity:quantity + 1}));
    };
    const decrementCart = (id,quantity) => {
        if (quantity >1) {
            dispatch(updateQuantity({id,quantity:quantity - 1}));
        }
        
    };

  return (
      <div>
             <div className='container cd'>
              <h1>MY CART</h1>
              {cartProducts.map((item) => (
                  <div className='card mb-3' key={item._id}>
                      <div className='row g-0'>
                          <div className='col-lg-4'>
                              <img src={item.image} alt='' />
                              
                          </div>
                          <div className='col-lg-4'>
                              <div className='card-body'>
                                  <h5 >{item.title}</h5>
                                  <p>{item.ds}</p>
                                  <p>{item.price}</p>
                                  <button className='btn btn-warning' onClick={()=>{deleteCart(item)}}>Delete</button>
                              <button>
                                <button className='btn btn-warning' onClick={()=> {decrementCart(item._id,item.quantity)}}>-</button>
                                {item.quantity}
                                <button className='btn btn-warning' onClick={()=> {incrementCart(item._id,item.quantity)}}>+</button>
                              </button>
                              </div>      
                          </div>
                      </div>  
                      </div>
              ))}
          </div>
    </div>
  )
}

export default Cart;