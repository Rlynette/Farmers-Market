import React, { useEffect, useState } from "react";
import Product from "./Product";
import ProductForm from "./ProductForm";



function ListInCart() {
    // const [selectedCategory, setSelectedCategory] = useState("All");
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:4000/products')
        .then((r) => r.json())
        .then((products) => setProducts(products));
  
    }, []);
  
    function handleDeleteProduct(deletedProduct) {
      const updatedProducts = products.filter((product) => item.id !== deletedProduct.id);
      setProducts(updatedProducts);
    }
  
    function handleUpdateProduct(updatedProduct) {
      const updatedProduct = products.map((product) => {
        if (product.id === updatedProduct.id) {
          return updatedProduct;
        } else {
          return product;
        }
      });
      setProducts(updatedProducts);
    }
      // console.log("In ShoppingCart:", updatedItem);
  
  
    function handleAddProduct(newProduct) {
      setProducts([...products, newProduct]);
    }
  
    // function handleCategoryChange(category) {
    //   setSelectedCategory(category);
    // }
  
    // const itemsToDisplay = items.filter((item) => {
    //   if (selectedCategory === "All") return true;
  
    //   return item.category === selectedCategory;
    // });
  
    return (
      <div className="List">
        <ItemForm onAddProduct={handleAddProduct} />
        {/* <Filter
          category={selectedCategory}
          onCategoryChange={handleCategoryChange}
        /> */}
        {/* <ul className="Products">
          {itemsToDisplay.map((item) => ( */}
            <Item 
            key={product.id} 
            product={product} 
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
            />
          
       
      </div>
     );
   }
  
  export default ListInCart;
  


