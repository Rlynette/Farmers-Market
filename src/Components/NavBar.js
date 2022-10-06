import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
const navStyle= {
    display: "grid",
    backgroundColor: "green"
 
  }
  return(
<div className='navbar'>
  <div className="nav-link">
  <NavLink to='/'>Home</NavLink>
     <NavLink to='/producedetails'>ProductContainer</NavLink>
     <NavLink to='/login'>Login</NavLink>
  </div>
    </div>
)
}




export default NavBar;