import SearchBar from './SearchBar';
import style from './hero.module.css'
const Hero = () => {
    return (
        <>
        <section className={`${style.container} py-0 py-lg-5`}>
            <div className='container-xl px-4 py-5 my-lg-5 f-bold'>
            <h1>Encuentra tu próxima gran historia</h1>
            <p className='col-12 col-md-7 my-4'>Explora nuestra amplia selección de géneros literarios y descubre esa historia que te atrapará desde la primera página.</p>
            <SearchBar />
            </div>
        </section>
        </>
    )
}
export default Hero;