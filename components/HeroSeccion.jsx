import Link from "next/link";
import styles from "./HeroSeccion.module.css";

const HeroSeccion = ({ titulo, ruta, subRuta = null }) => {
  return (
    <div className={styles.wraper}>
      <div className={styles.content}>
        <h2 className="fw-bolder">{titulo}</h2>
        <div>
          
          {subRuta == null ? (
           <p> <Link href={"/"}>Inicio</Link>  &gt;  <span>{ruta}</span> </p>
          ):(
            <p> <Link href={"/"}>Inicio</Link>  &gt;  <span><Link href={`/${ruta.toLowerCase()}`}>{ruta}</Link></span>  &gt;  <span>{subRuta}</span> </p>
          )}  
            

        </div>
      </div>
    </div>
  );
};

export default HeroSeccion;
