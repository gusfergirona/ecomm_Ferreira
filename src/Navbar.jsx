import React from 'react';
import { CartWidget } from './CartWidget';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <a className="navbar-brand" href="../multimedia/logo.jpg">
          <img src="../multimedia/logo.jpg" alt="Logo de la tienda" className="logo-img" />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-light" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/productos">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/contacto">Contacto</a>
          </li>
        </ul>
        <CartWidget itemCount={5} />
      </nav>
    );
  }

export { Navbar };