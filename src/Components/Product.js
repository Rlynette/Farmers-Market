import React from "react";

function Product({product}){
  return(
   <> 
    <td>{product.name}</td>
    <td>{product.description}</td>
    <td>{product.category}</td>
    <td>{product.amount}</td>
    </>
  )
}

export default Product;