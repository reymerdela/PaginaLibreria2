import style from "./BookSeccion.module.css";
import BookCard from "../BookCard";

import SeccionTitle from "../SeccionTitle";
import { getLibros } from "@/services/datosService";
// import { Suspense } from "react";
// import Loading from "@/app/loading";
import { Splide, SplideSlide } from "@/util/slider";

const BookSeccion = async () => {

  const { datos: libros } = await getLibros();

  return (
    <section className="container-xl px-3 p-sm-4">
      <SeccionTitle title="Libros Populares" href={"/libros"} />
      <div className={style.bookContainer}>
        <Splide options={{
          snap: true,
          perPage: 1,
          autoWidth: true,  
        }}>
          {libros.slice(0, 5).map((libro) => (
            <SplideSlide key={libro.id}>
              <BookCard book={libro} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};
export default BookSeccion;
