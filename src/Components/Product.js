import React from "react";

function Product({product}){
  return(
   <> 
    <td>{product.date}</td>
    <td>{product.description}</td>
    <td>{product.category}</td>
    <td>{product.amount}</td>
    </>
  )
}

export default Product;