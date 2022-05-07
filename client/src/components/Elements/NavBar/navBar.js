import React, { useEffect, useState } from "react";
import "./navBar.sass";
import Logo from "../../../assets/images/Logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsWindowSidebar } from "react-icons/bs";
export default function NavigationBar() {
  let location = useLocation();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(false);
  const [agency, setAgency] = useState(false);
  useEffect(() => {
    console.log(location.pathname);
    if (
      location.pathname === "/agencyHome" ||
      location.pathname === "/agencyTourists"
    ) {
      setAgency(true);
    } else {
      setAgency(false);
      if (location.pathname === "/login" || location.pathname === "/admin") {
        setLoginState(true);
      } else {
        setLoginState(false);
      }
    }
  });
  return (
    <div className="Navbar">
      <div className="Header">
        <div className="logo">
          <Link to={!agency ? "/agencyhome" : "/"}>
            <img src={Logo} />
          </Link>
        </div>
        <div className="options">
          {agency ? (
            <>
              <p>
                <p>Destination</p>
              </p>
              <p>
                <p>About</p>
              </p>
              <p>
                <p>Contact-US</p>
              </p>
            </>
          ) : (
            <>
              <p>
                <p>Services</p>
              </p>
              <p>
                <p>Tourists</p>
              </p>
            </>
          )}
        </div>
        <div></div>
        {loginState ? (
          <button
            className="Login"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login|Signup
          </button>
        ) : (
          <CgProfile
            size={64}
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          />
        )}
      </div>
    </div>
  );
}
