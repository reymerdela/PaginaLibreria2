
import BookSeccion from '@/components/secciones/BookSeccion';
import styles from './Home.module.css'
import PromoBanner from '@/components/secciones/PromoBanner';
import GenreSeccion from '@/components/secciones/GenreSeccion';
import NuevosLibros from '@/components/secciones/NuevosLibros';
import Autores from '@/components/secciones/Autores';
import Hero from '@/components/Hero';
import Image from 'next/image';
import heroImage from '../public/images/stock-photo-selective-focus-stack-books-wooden.jpg'
import Features from '@/components/secciones/Features';
import Blog from '@/components/secciones/Blog';
import Suscribe from '@/components/secciones/Suscribe';
import Testimonials from '@/components/secciones/Testimonials';
export default function Home() {
    return (
        <>
          <section className={styles.populares} >
         
            <BookSeccion />
            <PromoBanner />
            <GenreSeccion />
            <NuevosLibros />
            <Autores />
            <Features />
            <Testimonials />
            <Blog />
            <Suscribe />
          </section>
        </>
    )
}

