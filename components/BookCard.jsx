
import style from './bookCard.module.css'
const BookCard = ({book}) => {
    const { title, autor, img, price, description, category } = book;
    console.log(book);
    return (
        <article className={style.bookCard}>
            <img className={style.imgContainer} src={img} alt='book'/>
            <p className={style.autor}>{autor}</p>
            <h3 className={style.titulo}>{title}</h3>
            <p className={style.precio}>${price}</p>
        </article>
    )
}

export default BookCard;