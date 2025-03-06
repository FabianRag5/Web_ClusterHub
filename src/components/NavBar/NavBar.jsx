import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          Logo
        </a>

        <nav className="NavBar">
          <a href="/">Sobre la App</a>
          <a href="/">Funciones</a>
          <a href="/">Pendiente</a>
          <a href="/">Pendiente</a>
          <a href="/">Contactanos</a>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
