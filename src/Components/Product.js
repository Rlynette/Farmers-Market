import React from "react";

function Product({ Product, onUpdateProduct, onDeleteProduct}) {


    function handleAddToCartClick() {
      fetch(`http://localhost:4000/products/${product.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isInCart: !product.isInCart,
        }),
      })
        .then((r) => r.json())
        .then((updatedProduct) => onUpdateProduct(updatedProduct));
    }
      // console.log("clicked item:", item);
    
      // function handleDeleteClick() {
      //   console.log(item);
      // }
  
      function handleDeleteClick() {
        fetch(`http://localhost:4000/products/${product.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then(() => onDeleteProduct(product));
        }
  
    return (
      <li className={product.isInCart ? "in-cart" : ""}>
        <span>{product.name}</span>
        {/* <span className="category">{item.category}</span> */}
        <button className={product.isInCart ? "remove" : "add"}
          onClick={handleAddToCartClick}
         >
          {product.isInCart ? "Remove From" : "Add to"} Cart
        </button>
        <button className="remove" onClick={handleDeleteClick}>
          Delete
          </button>
      </li>
    );
  }
  
  
export default Product;