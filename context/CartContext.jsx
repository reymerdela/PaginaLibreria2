"use client";

import { useState, createContext } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto, value = 1) => {
    if (productos.length === 0) {
      return setProductos([{ ...producto, cantidad: value }]);
    }
    const productoExistente = productos.find((p) => p.id === producto.id);
    if (!productoExistente) {
      return setProductos([...productos, { ...producto, cantidad: value }]);
    }
    setProductos(
      productos.map((p) =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + value } : p
      )
    );
  };

  const incrementarCantidad = (id) => {
    setProductos(productos.map((p) => p.id === id ? {...p, cantidad: p.cantidad + 1} : p))
   }

   const precioTotal = productos.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)

   const disminuirCantidad = (id) => { 
    if (productos.length === 0) return
    if (productos.find((p) => p.id === id).cantidad === 1) {
      return setProductos(productos.filter((p) => p.id !== id))
    }
    setProductos(productos.map((p) => p.id === id ? {...p, cantidad: p.cantidad - 1} : p))
   }

   const cantidadTotal = productos.reduce((acc, producto) => acc + producto.cantidad, 0)

  return (
    <cartContext.Provider value={{ productos, agregarProducto ,incrementarCantidad, disminuirCantidad, cantidadTotal, precioTotal}}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
