import { getGenero } from "@/services/datosService";
import { Splide, SplideSlide, AutoScroll} from "../../util/slider";
import Genre from "../Genre";
import SeccionTitle from "../SeccionTitle";
import '@splidejs/react-splide/css/core';


const GenreSeccion = async () => {
  const generos = await getGenero();

  return (
    <section className="my-3">
      <SeccionTitle title="Generos" href={"/libros"} />
      <Splide
        options={{
          type: "loop",
          drag: 'free',
          perPage: 3,
          gap: "2rem",
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
