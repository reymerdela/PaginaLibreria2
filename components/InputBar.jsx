import Button from './Button';
import style from './InputBar.module.css'

const InputBar = () => { 
    
    return (
        <div className={style.container}>
            <input className={style.input} type="text" placeholder="Ingresa tu correo electrónico" />
            <Button value='Suscribirme'/>
        </div>
    )
}

export default InputBar;