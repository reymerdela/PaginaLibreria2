import style from "./BookSeccion.module.css";
import BookCard from "../BookCard";

import SeccionTitle from "../SeccionTitle";
import { getLibros } from "@/services/datosService";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { Splide, SplideSlide } from "@/util/slider";
const BookSeccion = async () => {
  const Books = await getLibros();

  return (
    <section>
      <SeccionTitle title="Libros Populares" href={"/libros"} />
     
        <div className={style.bookContainer}>
          {Books.slice(0, 5).map((book) => (
            <BookCard key={book.titulo} book={book} />
          ))}
        </div>
    </section>
  );
};
export default BookSeccion;
