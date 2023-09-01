import styles from './AutoresGrid.module.css'
import OrdenarAutores from "./OrdenarAutores"
import Autor from "./Autor"
export default function AutoresGrid({autores}) {
    

    return (
        <div>
            <OrdenarAutores />
            <div className="my-4 row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 gy-5">
               {autores.map(autor => (
                <Autor key={autor.id} autor={autor} />
               ))}
            </div>
        </div>
    )

}