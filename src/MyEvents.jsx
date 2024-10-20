import ListEventsCards from './ListEventsCards';
import { NavLink } from "react-router-dom";

const RegisterEvent = () => {
    return (
        <>
            <h1 className='pt-5 pb-3'>Meus Eventos</h1>
            <p>Aqui você pode visualizar os eventos que você organizou e gerenciar as presenças.</p>
          
            <NavLink className="nav-item nav-link pt-2" to="/register-event">
                <button className="btn btn-primary px-4">
                    <i className="bi bi-plus pe-2"></i>
                    Cadastrar Novo Evento
                </button>
            </NavLink>
       
            <ListEventsCards />
        </>
    );
}

export default RegisterEvent;