import styles from './Autores.module.css'

const Autores = () => {
    

    return (
        <section className={styles.container}>
            <h3>Autores</h3>
            <div className={styles.content}>
                <div className={styles.autorImg}><img src='https://picsum.photos/200/300' /></div>
            </div>
        </section>
    )
}
export default Autores;