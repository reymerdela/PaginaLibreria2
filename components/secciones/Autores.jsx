import { Splide, SplideSlide } from "@/util/slider";
import HeroSeccion from "../HeroSeccion";
import SeccionTitle from "../SeccionTitle";
import styles from "./Autores.module.css";
import { getAutores } from "@/services/datosService";
import Image from "next/image";
import '@splidejs/react-splide/css';


const Autores = async () => {
    //acortar string
    function truncateString(str, num) {
        if (str.length <= num) {
          return str
        }
        return str.slice(0, num) + '...'
      }
  const autores = await getAutores();
  console.log(autores);
  return (
    <section className="mt-4">
      <SeccionTitle title={"Autores"} href={"/autores"} />
      <div style={{background: "var(--main-color-light"}} className="my-4 autores rounded-4" >
        <Splide
          options={{
            pagination: true,
            type: "loop",
            padding: "5rem",
          }}
        >
        
          {autores.map((autor) => (
            <SplideSlide key={autor.id}>
              <div className="d-flex gap-3 p-4 mh-100">
                <Image alt="autor" src={autor.imagen} width={300} height={300}
                    style={{width: "30%", height: "auto", aspectRatio: "2/3"}}
                />
                <div>
                <h4>{autor.nombre}</h4>
                {/* <p className="">{autor.biografia}</p> */}
                </div>
              </div>
            </SplideSlide>
          ))}
          
        </Splide>
      </div>
    </section>
  );
};
export default Autores;
