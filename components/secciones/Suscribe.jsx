import SearchBar from "../SearchBar";
import style from "./Suscribe.module.css";
import InputBar from "../InputBar";
const Suscribe = () => {
  return (
    <section className="px-0 p-sm-4 container-xl">
      <div className="text-center p-3 p-md-5 rounded-4" style={{background: "var(--main-color)", color: "#fff"}}>
        <h3 className="mb-4 fw-bolder">Suscribete!</h3>
        <p className="mb-3">
          No te pierdas ninguna oportunidad de enriquecer tu vida con historias
          fascinantes y conocimiento inspirador. ¡Suscríbete ahora y forma parte
          de nuestra familia literaria!
        </p>
        <div className="col-12 col-lg-8 mx-auto">
          <InputBar />
        </div>
      </div>
    </section>
  );
};

export default Suscribe;
