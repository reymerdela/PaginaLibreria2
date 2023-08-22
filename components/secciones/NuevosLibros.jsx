import BookCard from "../BookCard";
import style from "./NuevosLibros.module.css";
import libros from "../../Data/Data.json";
import Button from "../Button";
const books = JSON.parse(JSON.stringify(libros));
const NuevosLibros = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <h3>Nuevos Libros</h3>
        <p>
          Así que, ¿qué estás esperando? Explora nuestra colección de nuevos
          libros y descubre tu próxima lectura favorita. La aventura literaria
          te espera, ¡comienza hoy mismo!
        </p>
        <div className={style.button}>
        <Button value="Ver mas" />
        </div>
      </div>
      <div className={style.bookContainer}>
        <BookCard book={books[0]} />
        <BookCard book={books[0]} />
        <BookCard book={books[0]} />
      </div>
    </section>
  );
};

export default NuevosLibros;
