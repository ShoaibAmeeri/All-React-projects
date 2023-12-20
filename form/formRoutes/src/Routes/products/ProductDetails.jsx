import React from 'react'
import { ProductsData } from '../ProductsData';
import { useParams } from 'react-router-dom';


function Product1(){
  let {id} = useParams()
 
  let product = ProductsData.find(p=>p.id==id)
  return (
    <div className= 'container m-5'>
    <h1 >Product Details</h1>
    <br />
    <h2>Product ID : {product.id} </h2>
    <h2>Product Name : {product.name}</h2>
    <h2>Product Price : Rs: {product.price}</h2>
    </div>

  )
}

export default Product1