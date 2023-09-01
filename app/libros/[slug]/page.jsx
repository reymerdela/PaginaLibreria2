
import HeroSeccion from "@/components/HeroSeccion";
import { getLibros, getLibrosBySlug } from "@/services/datosService";
import styles from "./pageDetails.module.css";
import Image from "next/image";
import {default as cart } from "../../../public/images/bag.svg";
import { useContext } from "react";
import { cartContext } from "@/context/CartContext";
import { ProductDetail } from "@/components/secciones/ProductDetail";

const DetalleLibro = async ({ params }) => {
  const libro = await getLibrosBySlug(params.slug);
  



  return (
    <section>
      <HeroSeccion titulo={"Detalle"} ruta="Libros" subRuta={libro.titulo} />
      <ProductDetail libro={libro}/>
      {/* <div className="container-xxl px-4 my-5">
        <div className="row g-5 px-4">
          <div className="col-12 col-lg-5 px-0 px-lg-4 ">
          <Image
            className="rounded-4"
            alt="libro"
            src={libro.imagen}
            width={200}
            height={300}
            style={{ width: '100%', height: "auto",}}
          />
        </div>
        <div className="col-12 col-lg-7  border rounded-4 p-4 d-flex flex-column justify-content-between">
          <div>
            <span
              style={{
                background: "var(--main-color-light)",
                color: "var(--main-color)",
              }}
              className="fw-bold my-3 py-2 px-4 rounded-4"
            >
              Disponible
            </span>
            <h2 className="fw-bolder my-3">{libro.titulo}</h2>
            <p className="lead fs-6">
              Autor: <span className="fw-bold">{libro.autor}</span>{" "}
            </p>
            <hr />
            <p style={{ color: "var(--main-color)" }} className="fw-bold fs-4">
              ${libro.precio}
            </p>
          <p>{libro.descripcion}</p>
          </div>
          <div>
          <hr />
          <p>Cantidad</p>
            <div className="d-flex gap-4">
              <div className="bg-body-secondary rounded-4 d-flex gap-4 align-items-center">
                <button className="btn">-</button>
                <span>1</span>
                <button className="btn">+</button>
              </div>

              <button style={{background: "var(--main-color)"}} className="btn text-white rounded-4 px-3" onClick={handleAgregarProducto}>
              <i className="bi bi-bag pe-2"></i>Agregar al carrito</button>
            </div>
              <hr />
              <p>Categorias: {libro.generos.map(genero => (
                <span className="fw-bold" key={libro.genero}>{genero}, </span>
              ))}</p>
          </div>
        </div>
        
        
        </div>
      </div> */}
    </section>
  );
};

export default DetalleLibro;
