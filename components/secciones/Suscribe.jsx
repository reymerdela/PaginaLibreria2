import SearchBar from "../SearchBar";
import style from "./Suscribe.module.css";
import InputBar from "../InputBar";
const Suscribe = () => {
  return (
    <section className="containerSeccion">
      <div className={style.container}>
        <h3>Suscribete!</h3>
        <p>
          No te pierdas ninguna oportunidad de enriquecer tu vida con historias
          fascinantes y conocimiento inspirador. ¡Suscríbete ahora y forma parte
          de nuestra familia literaria!
        </p>
        <div className={style.input}>
          <InputBar />
        </div>
      </div>
    </section>
  );
};

export default Suscribe;
