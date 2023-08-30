
import LibrosSeccion from "@/components/secciones/LibrosSeccion";
import HeroSeccion from "@/components/HeroSeccion";
import { Suspense } from "react";
import Loading from "../loading";

export default async function LibrosPage() {

  
  return (
     <section>
            <HeroSeccion titulo={"Libros"} ruta={"Libros"} />
            <Suspense fallback={<Loading/>}>
            <LibrosSeccion />
            </Suspense>
         
      </section>

  );
}

