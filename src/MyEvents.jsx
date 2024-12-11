import ListEventsCards from './ListEventsCards';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getUserId } from './js/authService';
import api from "./js/axiosApi";

const RegisterEvent = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadEvents = () => {
        setLoading(true);
        const id_organizador = getUserId()
        api.get(`obter_eventos/${id_organizador}`)
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {loadEvents()},[]);

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
            {events.length > 0 ? (
                <ListEventsCards items={events} />
            ) : (
                <p className="mt-5">Nenhum evento encontrado.</p>
            )}
       
            
        </>
    );
}

export default RegisterEvent;