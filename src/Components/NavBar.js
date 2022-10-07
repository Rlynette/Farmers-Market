import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div className='navbar'>
      <div className="nav-link">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/producedetails'>ProductData</NavLink>
      </div>
    </div>
  )
}




export default NavBar;