"use client";
import style from './pageCart.module.css';
import { useContext } from "react";
import { cartContext } from "@/context/CartContext";
import HeroSeccion from "@/components/HeroSeccion";
import Image from "next/image";
import { ButtonCantidad } from "@/components/ButtonCantidad";

export const Cart = () => {
  const { productos, incrementarCantidad, disminuirCantidad, cantidadTotal ,precioTotal} = useContext(cartContext);

  return (
    <>
      <HeroSeccion titulo="Compras" ruta={"cart"} />
      <section className={style.container}>
        <table className="table border rounded-4 ">
        <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Producto</th>
              <th scope="col">Titulo</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
            </tr>
        </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td className="align-middle">
                  <button className="btn btn-close" />
                </td>
                <td className='align-middle'>
                  <Image
                    src={producto.imagen}
                    width={100}
                    height={150}
                    alt="libro"
                  />
                </td>
                <td className="align-middle">{producto.titulo}</td>
                <td className="align-middle">
                  <div className="d-flex">
                    <ButtonCantidad producto={producto} disminuir={disminuirCantidad}
                    incrementar={incrementarCantidad} />
                  </div>
                </td>
                <td className="align-middle fw-bold">
                  ${producto.precio}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="border rounded-4 p-4">
                      <h2 className="fw-bold fs-4">Total</h2>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="fw-bold">Subtotal</p>
            <p className="fw-bold">${precioTotal}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="fw-bold">Envio</p>
            <p className="fw-bold">$0</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p className="fw-bold">Total</p>
            <p className="fw-bold">${precioTotal}</p>
          </div>
          <button className="btn btn-success w-100 mt-4">Finalizar compra</button>
           
        </div>
      </section>
    </>
  );
};

export default Cart;
