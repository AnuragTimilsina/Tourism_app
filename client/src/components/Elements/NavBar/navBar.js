import React from "react";
import "./navBar.sass";
import Logo from "../../../assets/images/Logo.png";
import { Link } from "react-router-dom";
export default function NavigationBar() {
  
  return (
    <div className="Navbar">
      <div className="Header">
        <div className="logo">
          <Link to= "/">
          <img src={Logo}/>
          </Link>
        </div>
        <div className="options">
          
          <p>
            <p>Destination</p>
          </p>
          <p>
            <p>About</p>
          </p>
          <p>
            <p>Contact-US</p>
          </p>
          </div>
          <Link to ="/login" >
          <button className ="Login">      
           Login|Signup
           </button>   
           </Link> 
          
        
          
        
      </div>
      
    </div>
  );
}
