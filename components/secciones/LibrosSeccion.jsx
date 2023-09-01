
import InputList from "../InputList";
import BookCard from "../BookCard";
import styles from "../../app/libros/Libros.module.css";
import OrderBar from "../OrderBar";
import { getAutores, getGenero, getLibros } from "@/services/datosService";

import Loading from "@/app/loading";
import Paginacion from "../Paginacion";


const LibrosSeccion = async ({params}) => {
  //Error: Cannot destructure property 'page' of 'searchParams' as it is undefined.
  const {page,genero, autor} = params;
  const numeroPagina = page ? parseInt(page) - 1 : 0
  

  const {datos: libros, pagination} = await getLibros(12,numeroPagina);


  const autores = await getAutores();
  const generos = await getGenero();
 

  return (
    <div className={styles.container}>
      <aside className={styles.filters}>
        <div className={styles.filterCard}>
          <h3 className={styles.subtitle}>Categoria</h3>
          <div className={styles.filtersContent}>
            <InputList lista={generos} />
          </div>
        </div>
        <div className={styles.filterCard}>
          <h3 className={styles.subtitle}>Autores</h3>
          <div className={styles.filtersContent}>
            <InputList lista={autores} />
          </div>
        </div>
      </aside>

      <section className={styles.main}>
        <div className={styles.orderContainer}>
          <OrderBar />
        </div>
        <div className={styles.booksContainer}>
          {libros.map((libro) => (
            <BookCard key={libro.id} book={libro} />
          ))}
        </div>
        <Paginacion paginacion={pagination}/>
      </section>
    </div>
  );
};

export default LibrosSeccion;
