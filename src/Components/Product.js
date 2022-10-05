import React from "react";

function Product({product}){

return (
  <li className={product.isInCart ? "in-cart" : ""}>
    <span>{product.name}</span>
    <span className="category">{product.category}</span>
    </li>
   );
}
export default Product;