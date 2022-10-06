import React from "react";
import Product from "./Product";


function ProductsList({ products }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>
            <h3 >Name</h3>
          </td>
          <td>
            <h3 >Description</h3>
          </td>
          <td>
            <h3 >Category</h3>
          </td>
          <td>
            <h3 >Amount</h3>
          </td>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => {
          return (
            <tr>
              <Product product={product} key={product.id} />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
// console.log(product);
export default ProductsList;