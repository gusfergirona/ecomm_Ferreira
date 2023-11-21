import { useState } from 'react'
import { Navbar } from './Navbar';
import { ItemListContainer } from './ItemListContainer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar className="navbar navbar-expand-lg navbar-light bg-success" />
        <Switch>
          <Route path="/" exact component={ItemListContainer} />
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
