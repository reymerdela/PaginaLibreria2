import Button from "../Button";
import style from "./PromoBanner.module.css";
const PromoBanner = () => {


  return (
    <section className="mb-5 container-xl px-3 p-sm-4">
    <div className={`${style.banner} p-4 p-lg-5`}>
      <div className={style.content}>
        <div>
          <p>Oferta especial</p>
          <h4>Solo a $800 por mes</h4>
          <p>Por los primeros 6 meses</p>
        </div>

        <Button value="Compra Ahora!" variant="button_white" />
      </div>
    </div>
      </section>
  );
};

export default PromoBanner;
