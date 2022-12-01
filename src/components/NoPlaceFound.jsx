import { Message } from 'primereact/message';
export const NoPlaceFound = () => {
    return (
        <div className='info-content'>
            <ul className="list-group">
                <li className="list-group-item"> 
                    <div className="col-12 md:col-3">
                        <Message severity="warn" text={`Lo sentimos, no se ha encontrado un lugar para la busqueda`} />
                    </div>
                </li>         
            </ul>
        </div>  
    )
}
