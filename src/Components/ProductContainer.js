import React, { useEffect, useState } from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";



function ListInCart() {
    // const [selectedCategory, setSelectedCategory] = useState("All");
    const [productsData, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:4000/products')
        .then((r) => r.json())
        .then(data => console.log(data));
        
    })

   
  return (
     <div >
<Product productsData={productsData}/>
<ProductForm />
     </div>
  )
  }
  export default ListInCart;
  


