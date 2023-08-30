

import Button from './Button';

const SeccionTitle = ({ title, href }) => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <h2>{title}</h2>
            <Button value='Ver mas'  href={href}/>
        </div>
    )
}

export default SeccionTitle;