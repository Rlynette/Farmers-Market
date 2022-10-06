import React from "react";
import ProductContainer from "./ProductContainer";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import ProductsList from "./ProductsList";
import Product from "./Product";


function App(){
  return(
     <div>
      <div className="title">
          <h2>Farmers' Produce Record</h2>
        </div>
  
      {/* <Switch>
        <Route exact path='/'>
          <NavBar />
          <Home />
        </Route>
        <Route path='product'>
          <NavBar />
          <Product />
        </Route>
        <Route path='/productslist'>
          <NavBar />
          <ProductsList />
        </Route>
      </Switch> */}
      
      
      <ProductContainer />
      </div>
    );
}
export default App;
