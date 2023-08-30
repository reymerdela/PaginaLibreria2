import styles from './OrdenarAutores.module.css';

export default function OrdenarAutores(){
    
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


    return (
        <div className={styles.container}>
        <button>All</button>
            {letras.map(letra=>(
                <button key={letra}>{letra}</button>
            ))}
        </div>
    )
}