import style from './SeccionTitle.module.css'
import Button from './Button';
const SeccionTitle = ({ title }) => {
    return (
        <div className={style.titleContainer}>
            <h2>{title}</h2>
            <Button value='Ver mas' />
        </div>
    )
}

export default SeccionTitle;