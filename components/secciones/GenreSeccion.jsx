import { Splide, SplideSlide, AutoScroll} from "../../util/slider";
import Genre from "../Genre";
import SeccionTitle from "../SeccionTitle";
import style from "./GenreSeccion.module.css";
import '@splidejs/react-splide/css/core';
import genero from '../../Data/Genero.json'


const {generos} = JSON.parse(JSON.stringify(genero));
console.log(generos)
const GenreSeccion = () => {
  
  return (
    <section className={style.genreContainer}>
      <SeccionTitle title="Generos" />
      <Splide
        options={{
          type: "loop",
          drag: 'free',
          perPage: 3,
          gap: "2rem",
          autoScroll: {
            speed: 1,
          },
        }}
        extensions={{AutoScroll}}
      >
      {generos.map(genre => (
        <SplideSlide>
          <Genre genero={genre}/>
        </SplideSlide>
      ))}
      </Splide>
    </section>
  );
};

export default GenreSeccion;
