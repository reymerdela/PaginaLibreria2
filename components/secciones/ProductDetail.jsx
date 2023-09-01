"use client";
import Image from "next/image";
import { useContext , useState } from "react";
import { cartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { ButtonCantidad } from "../ButtonCantidad";

export const ProductDetail = ({libro}) => {

    const router = useRouter()
    const [cantidad, setCantidad] = useState(1)
    const {agregarProducto, incrementarCantidad, disminuirCantidad} = useContext(cartContext)

    const handleAgregarProducto = () => {
       if(cantidad == 0) return
       agregarProducto(libro,cantidad)
       router.push("/cart")
  
    }

    const setValor = (valor) => { 
        if(valor < 0) return
        setCantidad(valor);
    }
  

  return (
    <div className="container-xxl px-4 my-5">
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
              <ButtonCantidad disminuir={disminuirCantidad} incrementar={incrementarCantidad} producto={libro} valor={setValor}/>
              <button style={{background: "var(--main-color)"}} className="btn text-white rounded-4 px-3" onClick={handleAgregarProducto}>
              <i className="bi bi-bag pe-2"></i>Agregar al carrito</button>
            </div>
              <hr />
              <p>Categorias: {libro.generos.map(genero => (
                <span key={genero} className="fw-bold">{genero}, </span>
              ))}</p>
          </div>
        </div>
        
        
        </div>
      </div>
  )
}
