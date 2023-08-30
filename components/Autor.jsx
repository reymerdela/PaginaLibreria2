 import styles from './Autor.module.css'
 const Autor = ({ autor }) => {
  return (
    <div className={styles.container}>
      <img src={autor.imagen} alt="Autor" />
      <p>{autor.nombre}</p>
    </div>
  );
};

export default Autor