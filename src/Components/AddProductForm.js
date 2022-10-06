import React, { useState } from "react";
import Product from "./Product";

function AddProductForm({ addProduct }) {
  const [productId, setproductId] = useState("");
  const [myProduct, setMyProduct ] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleSubmit(e) {
   if( myProduct.name && myProduct.description && myProduct.category && myProduct.amount){
    e.preventDefault();
    addProduct(myProduct);
    setMyProduct({ name: "", description: "", category: "", amount: "" });
    e.target.reset() 
   }
   else{
    e.preventDefault();
alert(" Incomplete")
   }
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="fields">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) =>
              setMyProduct((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={(e) =>
              setMyProduct((prev) => ({
                ...prev,
                description: e.target.value,
                id: setproductId(productId+1)
              }))
            }
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={(e) =>
              setMyProduct((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            onChange={(e) =>
              setMyProduct((prev) => ({ ...prev, amount: e.target.value }))
            }
          />
        </div>
        <button className="button" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;