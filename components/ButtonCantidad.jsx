"use client";

import { useState } from "react";

export const ButtonCantidad = ({ producto, incrementar, disminuir ,valor}) => {
  const [cantidad, setcantidad] = useState(producto.cantidad || 1);
  return (
    <div className="bg-body-secondary rounded-4 d-flex justify-between gap-4 align-items-center">
      <button
        className="btn"
        onClick={() => {
          cantidad > 0 && setcantidad(cantidad - 1);
          valor && valor(cantidad - 1);
          disminuir(producto.id);
        }}         
      >
        -
      </button>
      <span>{cantidad}</span>
      <button
        className="btn"
        onClick={() => {
          setcantidad(cantidad + 1);
          valor && valor(cantidad + 1)
          incrementar(producto.id);
        }}
      >
        +
      </button>
    </div>
  );
};
