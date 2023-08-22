import SearchBar from './SearchBar';
import style from './hero.module.css'
const Hero = () => {
    return (
        <div className={style.heroContainer}>
            <div className={style.heroWraper}>
            <h1>Encuentra tu próxima gran historia</h1>
            <p>Explora nuestra amplia selección de géneros literarios y descubre esa historia que te atrapará desde la primera página.</p>
            <SearchBar />
            </div>
        </div>
    )
}
export default Hero;