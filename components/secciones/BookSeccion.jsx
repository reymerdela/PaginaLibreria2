import style from './BookSeccion.module.css'
import Button from '../Button';
import BookCard from '../BookCard';
import libros from '../../Data/Data.json'
import SeccionTitle from '../SeccionTitle';
const Books = JSON.parse(JSON.stringify(libros));
console.log(Books);
const BookSeccion = () => {
  
    return (
        <section className='containerSeccion'>
            <SeccionTitle title='Libros Populares'/>
            <div className={style.bookContainer}>
                
               {Books.map((book) => (
                <div>
                <BookCard key={book.title} book={book} />
                </div>
               ))}
            </div>
        </section>
    )
 }
 export default BookSeccion;
