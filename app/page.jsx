import Hero from "@/components/Hero";

import BookSeccion from "@/components/secciones/BookSeccion";
import { Suspense } from "react";
import Loading from "./loading";
import PromoBanner from '@/components/secciones/PromoBanner';
import GenreSeccion from '@/components/secciones/GenreSeccion';
import NuevosLibros from '@/components/secciones/NuevosLibros';
import Autores from '@/components/secciones/Autores';
// import Features from '@/components/secciones/Features';
// import Blog from '@/components/secciones/Blog';
import Suscribe from '@/components/secciones/Suscribe';
import Testimonials from '@/components/secciones/Testimonials';
export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-4">
      <Suspense fallback={<Loading/>} >
        <BookSeccion />
      </Suspense>
      <PromoBanner />
      <GenreSeccion />
      <NuevosLibros />
      <Autores />
      <Testimonials />

      <Suscribe /> 
      </div>
      {/* 
            
            
            <Blog />
           */}
    </>
  );
}
