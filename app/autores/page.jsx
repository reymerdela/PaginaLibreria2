import HeroSeccion from "@/components/HeroSeccion";
import AutoresGrid from "@/components/AutoresGrid";
import {getAutores} from "@/services/datosService";

const AutoresPage = async () => {
  const autores = await getAutores();
  return (
    <div>
      <div>
        <HeroSeccion titulo={"Autores"} ruta={"Autores"} />
      </div>
      <section>
        <div className="container-xl p-4 mt-4">
          <AutoresGrid autores={autores} />
        </div>
      </section>
    </div>
  );
};

export default AutoresPage;
