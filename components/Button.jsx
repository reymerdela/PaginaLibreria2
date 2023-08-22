import style from './button.module.css'


const ButtonStyles = () => {
    
}

const estiloPrimario = {
    border: 'none',
    padding: '12px 18px',
    fontSize: '18px',
    fontWeight: 600,
    borderRadius: '24px',
    backgroundColor: 'var(--main-color)',
    color: 'white',
}
 const Button = ({value,style = estiloPrimario }) => {

    const estilo = {
        ...estiloPrimario,
        ...style,
    }

    return (
        <button style={estilo} className={style.button}>
            {value}
        </button>
    )
}

export default Button;