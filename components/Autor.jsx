 import styles from './Autor.module.css'
 import Image from 'next/image';
 const Autor = ({ autor }) => {
  return (
    <div className={`${styles.container}`}>
      <Image width={300} height={300} src={autor.imagen} alt="Autor" style={{objectFit: 'cover'}} />
      <p>{autor.nombre}</p>
    </div>
  );
};

export default Autor