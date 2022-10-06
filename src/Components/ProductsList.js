import React from "react";
import Product from "./Product";


function ProductsList({ products }) {
  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <td>
            <h3 className="ui center aligned header">Date</h3>
          </td>
          <td>
            <h3 className="ui center aligned header">Description</h3>
          </td>
          <td>
            <h3 className="ui center aligned header">Category</h3>
          </td>
          <td>
            <h3 className="ui center aligned header">Amount</h3>
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
        })};
      </tbody>
    </table>
  )
}
// console.log(product);
export default ProductsList;