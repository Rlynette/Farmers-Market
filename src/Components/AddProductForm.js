import React, { useState } from "react";
import Product from "./Product";

function AddProductForm({ addProduct }) {
  const [productId, setproductId] = useState(15);
  const [myProduct, setMyProduct ] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleSubmit(e) {
   if( myProduct.date && myProduct.description && myProduct.category && myProduct.amount){
    e.preventDefault();
    addProduct(myProduct);
    setMyProduct({ date: "", description: "", category: "", amount: "" });
    e.target.reset() 
   }
   else{
    e.preventDefault();
alert(" Incomplete")
   }
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            onChange={(e) =>
              setMyProduct((prev) => ({ ...prev, date: e.target.value }))
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
        <button className="ui button" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;