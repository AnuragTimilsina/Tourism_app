import React, { useState } from "react";
import "./navBar.sass";
import Logo from "../../../assets/images/Logo.png";
import { Link } from "react-router-dom";
export default function NavigationBar() {
  const [menu, setMenu] = useState(true);
  const of = () => {
    setMenu(true);
  };
  return (
    <div className="Navbar">
      <div className="Header">
        <div className="logo">
          <img src={Logo}/>
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
          <p>
            <Link to="/login"className="Login"><p>Login|Signup</p></Link>
          </p>
          <div
            className="burger"
            onClick={() => {
              if (menu) {
                setMenu(false);
              } else {
                setMenu(true);
              }
            }}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      
    </div>
  );
}
