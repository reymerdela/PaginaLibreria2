"use client";

import Image from "next/image";
import { default as logo } from "../public/images/LogoPng.png";
import Link from "next/link";
import style from "./navigationBar.module.css";
import { usePathname } from "next/navigation";
import { Navbar, Offcanvas } from "react-bootstrap";
import NavButtons from "./NavButtons";

const navItems = [
  {
    nombre: "Inicio",
    path: "/",
  },
  {
    nombre: "Libros",
    path: "/libros",
  },
  {
    nombre: "Autores",
    path: "/autores",
  },
  {
    nombre: "Blog",
    path: "/blog",
  },
  {
    nombre: "Sobre Nosotros",
    path: "/sobre-nosotros",
  },
];

export default function NavigationBar() {
  const router = usePathname();

  return (
    <>
      <Navbar expand="lg" className="container-xl gap-4 p-4 flex-nowrap">
    
        <div className="">
        <Link href={"/"} >
          <Image src={logo} alt="logo" 
          width={200}
          style={{
            width: "100%" ,
            height: "auto"
          }}
           priority  />
        </Link>
        </div>
       

        <div className="ms-auto  order-lg-last ">
          <NavButtons />
        </div>
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="start" className="me-auto w-75">
          <Offcanvas.Header closeButton >
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul
              className={`d-flex flex-column flex-lg-row align-items-start align-items-lg-center m-0 p-0 gap-4 mx-auto ${style.navLinks}`}
            >
              {" "}
              {navItems.map((item) => (
                <li key={item.nombre}>
                  <Link
                    className={router === item.path ? style.active : ""}
                    href={item.path}
                  >
                    {item.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}
