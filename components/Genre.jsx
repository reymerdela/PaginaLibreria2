import style from './Genre.module.css'
const Genre = ({genero}) =>{
    return (
        <div className='swiper-slide'>
        <div className={style.container} >
            <p>{genero}</p>
        </div>
        </div>
    )
}

export default Genre;