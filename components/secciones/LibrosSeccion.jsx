
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
    <div className="container-xl row mx-auto my-4">
      <aside className={`d-none d-lg-block col-4`}>
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

      <section className={`${styles.main} col-12 col-lg-8`}>
        <div className="d-flex justify-content-end p-2">
          <OrderBar />
        </div>
        <div className="row row-cols-2 row-cols-md-3">
          {libros.map((libro) => (
            <div key={libro.id} className="col">
              <BookCard book={libro} />
            </div>
          ))}
        </div>
        <Paginacion paginacion={pagination}/>
      </section>
    </div>
  );
};

export default LibrosSeccion;
