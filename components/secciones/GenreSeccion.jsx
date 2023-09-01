import { getGenero } from "@/services/datosService";
import { Splide, SplideSlide, AutoScroll} from "../../util/slider";
import Genre from "../Genre";
import SeccionTitle from "../SeccionTitle";
import '@splidejs/react-splide/css/core';
import styles from './Genre.module.css'
const GenreSeccion = async () => {
  const generos = await getGenero();

  return (
    <section className={`${styles.container} container-xl px-3 p-sm-4`}>
      <SeccionTitle title="Generos" href={"/libros"} />
      <Splide
        options={{
          type: "loop",
          drag: 'free',
          autoWidth: true,
          perPage: 3,
          gap: "2rem",
          padding: 0,
          pagination: false,
          autoScroll: {
            speed: 1,
          },
        }}
        extensions={{AutoScroll}}
      >
      {generos.map(genero => (
        <SplideSlide key={genero.id}>
          <Genre genero={genero}/>
        </SplideSlide>
      ))}
      </Splide>
    </section>
  );
};

export default GenreSeccion;
