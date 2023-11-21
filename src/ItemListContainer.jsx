import React from 'react';

function ItemListContainer({ message }) {
    return (
      <div className="container mt-5">
        <h1 className="text-success">{message}</h1>
      </div>
    );
  }

export { ItemListContainer };

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductListByCategory, getProductDetails } from '../api'; // Importa tus funciones asincrónicas

function ItemListContainer() {
  const { id } = useParams();

  useEffect(() => {
    // Lógica para cargar productos basada en el id de la categoría
    const fetchProductList = async () => {
      const productList = await getProductListByCategory(id);
      // Actualiza el estado o realiza otras acciones necesarias
    };

    fetchProductList();
  }, [id]);

  // Renderizar el componente ItemListContainer
}

function ItemDetailContainer() {
  const { id } = useParams();

  useEffect(() => {
    // Lógica para cargar detalles del producto basada en el id del producto
    const fetchProductDetails = async () => {
      const productDetails = await getProductDetails(id);
      // Actualiza el estado o realiza otras acciones necesarias
    };

    fetchProductDetails();
  }, [id]);

  // Renderizar el componente ItemDetailContainer
}
