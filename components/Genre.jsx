import Link from 'next/link';
import style from './Genre.module.css'
const Genre = ({genero}) =>{



    return (
        <Link href={`/libros?genero=${genero.nombre}`} className='swiper-slide'>
        <div className={style.container} style={{background: "url('https://picsum.photos/200/300?grayscale')"}} >
            <p>{genero.nombre}</p>
        </div>
        </Link>
    )
}

export default Genre;