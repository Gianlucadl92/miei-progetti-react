import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" className="logo">
          <img src={logo} alt="cocktail db logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-links">
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-links">
              about
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
