import { useState } from 'react'
import { Navbar } from './Navbar';
import { ItemListContainer } from './ItemListContainer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-success" />
      <ItemListContainer message="Bienvenido a MóvilArte: Tu tienda de accesorios para dispositivos móviles" className="container mt-5 text-success" />
    </div>
  );
}

export default App;