
import BookCard from "./BookCard"
import styles from "./BooksGrid.module.css"



const BooksGrid = ({libros}) => {

    

    return (
        <div className={styles.booksContainer}>
            {libros.map((libro) => (
              <BookCard key={libro.id} book={libro} />
            ))}
          </div>
    )
}
export default BooksGrid;