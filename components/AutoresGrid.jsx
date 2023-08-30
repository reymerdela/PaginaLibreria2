import styles from './AutoresGrid.module.css'
import OrdenarAutores from "./OrdenarAutores"
import Autor from "./Autor"
export default function AutoresGrid({autores}) {
    

    return (
        <div>
            <OrdenarAutores />
            <div className={styles.container}>
               {autores.map(autor => (
                <Autor key={autor.id} autor={autor} />
               ))}
            </div>
        </div>
    )

}