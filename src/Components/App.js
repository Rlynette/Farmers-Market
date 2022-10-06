import React from "react";
import ProductContainer from "./ProductContainer";

function App(){
    return(
        <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>Farmers' Produce Record</h2>
      </div>
      <ProductContainer />
        </div>
    );
}
export default App;
