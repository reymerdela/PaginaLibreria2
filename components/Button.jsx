import Link from 'next/link'
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
 const Button = ({value, size ="", href = "" ,variant= 'button'}) => {

   

    return (
        <Link href={href} className={style[variant]} >
            {value}
        </Link>
    )
}

export default Button;