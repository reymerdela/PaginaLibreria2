
import LibrosSeccion from "@/components/secciones/LibrosSeccion";
import HeroSeccion from "@/components/HeroSeccion";
import { Suspense } from "react";
import Loading from "../loading";
import { getLibrosByGenero } from "@/services/datosService";
export default async function LibrosPage({searchParams}) {


  
  return (
     <section>
            <HeroSeccion titulo={"Libros"} ruta={"Libros"} />
            <Suspense fallback={<Loading/>}>
            <LibrosSeccion params={searchParams}/>
            </Suspense>
         
      </section>

  );
}

