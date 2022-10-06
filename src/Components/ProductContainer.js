import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import Search from "./Search";


function ProductContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then((products) => setProducts(products));

  }, []);

  function handleSearch(e) {
    const mySearch = e.target.value
    const updateProduct = products.filter(product => product.name.toLowerCase().includes(mySearch))
    setProducts(updateProduct)
  }
  // function addProduct(product) {
  //   console.log(products);
  //   setProducts(previousState => [...previousState, product])
  // }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <ProductsList products={products}
      />
      {/* <addProductForm addProduct={addProduct} /> */}
    </div>
  )
}


export default ProductContainer;