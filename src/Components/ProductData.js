import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import Search from "./Search";
import AddProductForm from "./AddProductForm";


function ProductData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then((products) => setProducts(products));

  }, []);
  function addProduct(product) {
    console.log(products);
    setProducts(prevstate => [...prevstate, product])
  }

  function handleSearch(e) {
    const mySearch = e.target.value
    const updateProduct = products.filter(product => product.name.toLowerCase().includes(mySearch))
    setProducts(updateProduct)
  }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddProductForm addProduct={addProduct} />
      <ProductsList products={products}
      />
    </div>
  )
}


export default ProductData;