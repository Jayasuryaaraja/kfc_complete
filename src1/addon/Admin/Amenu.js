import React, { useEffect, useState } from 'react'
import Sidebar from '../component/Sidebar'
import './Amenu.css'
import { Link } from 'react-router-dom'

const Amenu = () => {
  const [productData,setProductData] = useState([]);
   useEffect(()=>{
    fetch(`http://localhost:5500/allproduct`)
    .then((res)=>res.json())
    .then((data)=>setProductData(data));
   },[]);
   const deleteProduct = (id) => {
    fetch(`http://localhost:5500/product/${id}`,{
      method: "DELETE",
    })
    .then((res)=>res.json())
    .then((data)=>{
      alert("Product deleted Successfully");
      setProductData((prevProductData)=>
      prevProductData.filter((item)=>item._id !== id))
    })
   }
  return (
    <div className='men'>  
        <Sidebar/>
        <div className='man' >
           <Link to='/menuadd'> <button> MENU ADD ON</button></Link>
           
                  
                  <h4>UPDATED PRODUCTS</h4>
                  
                  {productData.map((item)=>(
                    <div class="card mb-3" key={item._id}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={item.image} class="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">{item.title}</h5>
                          <p class="card-text">{item.ds}</p>
                          <p class="card-text">
                            {item.price}</p>
                            <Link to={`/edit/${item._id}` } className='btn btn-warning'>Edit</Link>
                          <button  type="submit" className='btn btn-danger' onClick={()=>deleteProduct(item._id)}>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                  
            
        </div>
    </div>
  )
}

export default Amenu