import React from 'react'
import { Link } from 'react-router-dom'
import'./Menuadd.css'
import { GiToaster } from 'react-icons/gi'

const Menuadd = () => {
    const handleSubmit = (e) =>{
      e.preventDefault();
      const form = e.target;
      const image = form. image.value;
      const title = form. title.value;
      const ds = form. ds.value;
      const price= form. price.value;
      const quantity= 1;

      if(image === "" || title === "" || ds === "" || price === ""){
      alert("Fill all the fields");
      } 
      const prdObj = {
        image,title,ds,price,quantity
      };console.log(prdObj);
      
      fetch("http://localhost:5500/product",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(prdObj)
      })
      .then((res)=>res.json())
      .then((data)=>{
        alert("Product Added Successfullyy")
        form.reset();
        window.location.href = "/amenu";
      });

    }
  return (
    <div className='addi'>
        <h3>UPLOAD MENU ITEM</h3>
        <form onSubmit={handleSubmit} >
            <label value= "image">Image</label><br/>
            <input
             type='text'
             name='image'
             id='1'
             /><br/>
            <label value="title">Title</label><br/>
            <input
             type='text '
             name='title'
             id='title'
             /><br/>
            <label value="ds">Description</label><br/>
            <input
             type='text'
             name='ds'
             id='ds'
             /><br/>
            <label value="price">Price</label><br/>
            <input 
            type='number'
            name='price'
            id='price'
            /><br/><br></br>
            <button type="submit" className='btn btn-success'>UPLOAD</button>
        </form>
    </div>
  )
}

export default Menuadd