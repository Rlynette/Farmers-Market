import React from "react";
import ProductData from "./ProductData";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";


function App() {
  return (
    <div>
      <div className="title">
        <h2>Farmers' Produce Record</h2>
      </div>

      <NavBar />
      {/* <ProductContainer /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/producedetails' element={<ProductData />}></Route>

      </Routes>
    </div>
  );
}
export default App;
