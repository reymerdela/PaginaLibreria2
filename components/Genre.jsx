import style from './Genre.module.css'
const Genre = ({genero}) =>{



    return (
        <div className='swiper-slide'>
        <div className={style.container} style={{background: "url('https://picsum.photos/200/300?grayscale')"}} >
            <p>{genero.nombre}</p>
        </div>
        </div>
    )
}

export default Genre;