import { Splide, SplideSlide } from "@/util/slider";

import SeccionTitle from "../SeccionTitle";
import styles from "./Autores.module.css";
import { getAutores } from "@/services/datosService";
import Image from "next/image";
import '@splidejs/react-splide/css/sea-green';


const Autores = async () => {
  
  const autores = await getAutores();

  return (
    <section className="mt-4 px-3 p-sm-4">
    <div className="container-xl">
      <SeccionTitle title={"Autores"} href={"/autores"} />
      <div className={styles.container}>
        <Splide
          options={{
            autoWidth: true,
            autoHeight: true,
            perPage2: 2,
            gap: "1rem",
          }}
        >
        
          {autores.slice(0,4).map((autor) => (
            <SplideSlide key={autor.id}>
              <div className="text-center h-100 p-2 rounded-top-4">
                <Image alt="autor" src={autor.imagen} width={200} height={200}
                  style={{objectFit: 'cover', borderRadius: '50%'}} 
                />
                <div>
                <p>{autor.nombre}</p>
                {/* <p className="">{autor.biografia}</p> */}
                </div>
              </div>
            </SplideSlide>
          ))}
          
        </Splide>
      </div>
      </div>
    </section>
  );
};
export default Autores;
