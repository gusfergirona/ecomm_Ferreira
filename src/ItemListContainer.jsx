import React from 'react';

function ItemListContainer({ message }) {
    return (
      <div className="container mt-5">
        <h1 className="text-success">{message}</h1>
      </div>
    );
  }

export { ItemListContainer };