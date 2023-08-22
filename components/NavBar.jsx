import Image from "next/image";
import { default as logo } from "../public/images/LogoPng.png";
import Link from "next/link";
import style from "./navbar.module.css";
import Button from "./Button";
const NavBar = () => {
  return (
    <nav className={style.navContainer}>
      {/*Logo Inicio libros autores blog sobre nosotros Iniciar sesion Crear cuenta */}
      <div className={style.navWraper}>
        <Image src={logo} width={200} alt="logo" />
        <ul className={style.navLinks}>
          <li>
            <Link href={"/"}>Inicio</Link>
          </li>
          <li>
            <Link href={"/libros"}>Libros</Link>
          </li>
          <li>
            <Link href={"/autores"}>Autores</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/sobre-nosotros"}>Sobre Nosotros</Link>
          </li>
        </ul>
      </div>
      <div className={style.navButtons}>
        <p className={style.login}>Iniciar Sesion</p>
        <Button value="Crear Cuenta" />
      </div>
    </nav>
  );
};

export default NavBar;
