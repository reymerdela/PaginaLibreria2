import styles from "./InputList.module.css";

const InputList = ({ lista }) => {
  
  
  return (
    <div className={styles.group}>
      {lista.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              className={styles.input}
              value={item.nombre}
            />
            {item.nombre}
          </label>
        </div>
      ))}
    </div>
  );
};

export default InputList;
