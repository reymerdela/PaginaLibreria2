'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import SvgComponent from "./IconBookCard";






const BookCard = ({ book }) => {

  const { titulo, autor, imagen, precio, descripcion, generos ,slug} = book;
  const [overButton, setOverButton] = useState(false)
  
  return (
    <article className="p-2 d-flex flex-column justify-content-between align-items-center ">
     <div>
     

      <Link href={`/libros/${book.slug}`}>
      <div>
      <Image 
      src={book.imagen}
      alt="book"
      width={200}
      height={300}
      className="img-card"
      style={{  
   
        borderRadius: "20px",
        objectFit: "cover",
      }} onMouseOver={() => setOverButton(true)} onMouseOut={() => setOverButton(false)}
      />
     </div>
      </Link>
      
      <p className="my-2 fw-medium text-truncate" style={{fontSize: '14px', color: 'var(--main-color)',maxWidth: "200px"}}>{autor}</p>
      <h3 className='fs-6 mt-2 fw-bold text-truncate' style={{maxWidth: "200px"}}>{titulo}</h3>
      <p className='fw-bold' style={{color: 'var(--main-color)'}}>${precio}</p> 
      </div>
    </article>
  );
};

export default BookCard;
