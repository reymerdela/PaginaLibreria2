import Image from "next/image";
import logo from "../public/images/logoWhite.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-black footer">
      <div className="px-4 pt-5 text-light row w-100 gy-4 m-0 container-xl mx-auto">
        <div className="col-6 col-md-3">
          <Image src={logo} width={150} alt="logo" />
          <p className="mt-3">Busca una ubicacion cerca de ti</p>
          <p>1809-000-0000</p>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column ">
          <h4 className="mb-3 ">Explora</h4>
          <Link href={"/libros"}>Libros</Link>
          <Link href={"/autores"}>Autores</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/sobre-nosotros"}>Sobre Nosotros</Link>
        </div>
        <div className="col-12 col-md-6">
            <h4 className="mb-3">Suscribete</h4>
            <p>Entra tu correo para mantener al tanto acerca de nuevos lanzamientos y descuentos</p>
            <div className="d-flex align-items-center p-1 bg-white rounded-4 justify-content-between">
                <input type="text" placeholder="Email" className="border-none " />
                <button className="btn rounded-4 text-white" style={{background: "var(--main-color)"}}>Suscribirse</button>
            </div>
        </div>
        <div className="col-12 text-center text-white-50">
            <hr />
            <p>Copyright &copy; 2023 Reymer - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
