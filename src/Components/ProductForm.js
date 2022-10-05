import React, {useState} from "react";

function ProductForm({ onAddProduct }) {
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    // const [category, setCategory] = useState("Produce");
  
    function handleSubmit(e) {
      e.preventDefault();
      const productData = {
        name: name,
        amount: amount,
        description: description,
        isInCart: false,
      // console.log("name:", name);
      // console.log("category:", category);
    };
    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((r) => r.json())
  
      .then((newProduct) => onAddProduct(newProduct));
  }
    // console.log(productData);
  
  
    return (
      <form className="NewProduct" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
  
        <label>
          Amount:
          <input
            type="numbers"
            amount="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        
        <label>
          Description:
          <input
            type="text"
            description="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button type="submit">Add to List</button>
      </form>
    );
  }






export default ProductForm;