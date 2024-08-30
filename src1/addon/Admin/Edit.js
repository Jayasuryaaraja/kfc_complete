import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Edit = () => {
    const {id} = useParams();
    const [prdData,setPrdData] = useState({
        image:"",
        title:"",
        ds:"",
        price:"",
    });
    useEffect(()=>{
        fetch(`http://localhost:5500/product/${id}`)
        .then((res)=>res.json())
        .then((data)=>setPrdData(data));
       });
       const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const image = form. image.value;
        const title = form. title.value;
        const ds = form. ds.value;
        const price= form. price.value;
         const prodObj = {
            image,title,ds,price
         };
         console.log(prodObj);
         fetch(`http://localhost:5500/product/${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(prodObj),
         })
         .then((res)=>res.json())
         .then((data)=>{
            alert("product update successfully");
            window.location.href="/amenu"
         });
        
        }

  return (
    <div>
<div className='addi'>
        <h3>UPLOAD ITEM</h3>
        <form onSubmit={handleUpdate} >
            <label value= "image">Image</label><br/>
            <input
             type='text'
             name='image'
             id='1'
             defaultValue={prdData.image}
             /><br/>
            <label value="title">Title</label><br/>
            <input
             type='text '
             name='title'
             id='title'
             defaultValue={prdData.title}
             /><br/>
            <label value="ds">Description</label><br/>
            <input
             type='text'
             name='ds'
             id='ds'
             defaultValue={prdData.ds}
             /><br/>
            <label value="price">Price</label><br/>
            <input 
            type='number'
            name='price'
            id='price'
            defaultValue={prdData.price}
            /><br/><br></br>
            <button type="submit" className='btn btn-success'>UPLOAD</button>
        </form>
    </div>
    </div>
  )
}

export default Edit