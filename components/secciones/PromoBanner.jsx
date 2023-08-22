import Button from "../Button";
import style from "./PromoBanner.module.css";
const PromoBanner = () => {
  const estilo = {
    backgroundColor: "#fff",
    color: "var(--main-color)",
  };

  return (
    <div className={style.banner}>
      <div className={style.content}>
        <div>
          <p>Oferta especial</p>
          <h4>Solo a $800 por mes</h4>
          <p>Por los primeros 6 meses</p>
        </div>

        <Button value="Compra Ahora!" style={estilo} />
      </div>
    </div>
  );
};

export default PromoBanner;
