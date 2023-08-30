import Button from './Button';
import styles from './searchBar.module.css'

const SearchBar = () => {
    return (
        <label className={styles.searchContainer}>
            <input placeholder='Buscar libros...'/>
            <Button value='Buscar'  />
        </label>
    )
}

export default SearchBar;