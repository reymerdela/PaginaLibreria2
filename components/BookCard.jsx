'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SvgComponent from "./IconBookCard";






const BookCard = ({ book }) => {

  const [overButton, setOverButton] = useState(false)
 
  const { titulo, autor, imagen, precio, description, generos } = book;
  return (
    <article className="p-2 d-flex flex-column justify-content-between ">
     <div>
      <Link href={`/libros/${book.id}`}>
 
      <Image 
      src={imagen}
      alt="book"
      width={200}
      height={300}
      className="img-card"
      style={{  
        height: "300px",
        width: "auto",
        borderRadius: "20px",
      }} onMouseOver={() => setOverButton(true)} onMouseOut={() => setOverButton(false)}
      />
      </Link>
      
      <p className="my-2 fw-medium" style={{fontSize: '14px', color: 'var(--main-color)'}}>{autor}</p>
      <h3 className='fs-6 mt-2 fw-bold'>{titulo}</h3>
      </div>
      <p className='fw-bold' style={{color: 'var(--main-color)'}}>${precio}</p> 
    </article>
  );
};

export default BookCard;
