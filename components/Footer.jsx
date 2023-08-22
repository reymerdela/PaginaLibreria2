import Image from 'next/image';
import style from './Footer.module.css'
import logo from '../public/images/logoWhite.png'
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className={style.footer}>
            <div>
                <Image src={logo} width={150} alt='logo'/>
                <p>Direccion Aqui</p>
                <p>1809-000-0000</p>
            </div>
            <div>
                <h4>Explora</h4>
                <Link href={'/libros'} className={style.link}>Libros</Link>
                <Link href={'/autores'} className={style.link}>Autores</Link>
                <Link href={'/blog'} className={style.link}>Blog</Link>
                <Link href={'/sobre-nosotros'} className={style.link}>Sobre Nosotros</Link>
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
        </footer>
    )
}

export default Footer;