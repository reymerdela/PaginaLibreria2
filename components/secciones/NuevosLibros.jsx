import BookCard from "../BookCard";
import style from "./NuevosLibros.module.css";
import Button from "../Button";
import { getLibros } from "@/services/datosService";
import { Splide, SplideSlide } from "@/util/slider";

const NuevosLibros = async () => {
  const {datos} = await getLibros();

  const libros = datos.sort((a, b) => {
    return new Date(b.fecha) - new Date(a.fecha);
  });

  return (
    <section className="container-xl mx-auto text-center mx-1 row" style={{background: "var(--main-color-light)"}}>
      <div className="col-12 col-md-6 d-flex flex-column p-4">
        <h3 className="fw-bold">Nuevos Libros</h3>
        <p className="my-auto">
          Así que, ¿qué estás esperando? Explora nuestra colección de nuevos
          libros y descubre tu próxima lectura favorita. La aventura literaria
          te espera, ¡comienza hoy mismo!
        </p>
      </div>


      <div className={`${style.bookContainer} col-12 col-md-6`}>    
      <Splide options={{
        perPage: 1,
        autoWidth: true,
      }}>
      {libros.slice(0,2).map((libro) => (
        <SplideSlide key={libro.id}>

          <BookCard  book={libro} />
        </SplideSlide>
        ))}
      </Splide>      
      </div>
      
    </section>
  );
};

export default NuevosLibros;
