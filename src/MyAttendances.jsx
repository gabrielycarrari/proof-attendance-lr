import ListAttendancesCards from './ListAttendancesCards';
import ModalRegisterAttendance from './ModalRegisterAttendance';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import api from './js/axiosApi';
import { getUserId } from './js/authService';

const MyAttendances = () => {
    const [evento, setEvento] = useState(null);
    const [eventKey, setEventKey] = useState('');  
    const [attendances, setAttendances] = useState([]);

    const handleFindEvent = (eventKey) => {
        api.get(`obter_evento_por_chave/${eventKey}`)
            .then((response) => {
                setEvento(response.data);
                console.log(response.data);
                handleRegisterAttendance();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                // setLoading(false);
            });
    }

    const handleRegisterAttendance = () => {
        const modal = new bootstrap.Modal(document.getElementById('modalRegisterAttendance'));
        modal.show();
    }

    const handleInputChange = (e) => {
        setEventKey(e.target.value);
    }

    const loadAttendances = () => {
        // setLoading(true);
        const id_participante = getUserId()
        api.get(`obter_presencas/${id_participante}`)
            .then((response) => {
                setAttendances(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                // setLoading(false);
            });
    }

    useEffect(() => {loadAttendances()},[]);

    return (
        <>
            <h1 className='pt-5 pb-3'>Minhas Presenças</h1>
            <p>Aqui você pode visualizar suas presenças e gerar seus certificados.</p>

            <div className="d-flex mt-5">
                <form action="" className="w-50">
                    <div className="input-group" >
                        <input type="text" className="form-control" id="eventKey" name="eventKey" placeholder="Identificador do Evento"  value={eventKey} onChange={handleInputChange}/>
                        <button className="btn btn-outline-primary" type='button' onClick={() => handleFindEvent(eventKey)}>
                            <i className="bi bi-person-add pe-2"></i>
                            Registrar Presença
                        </button>
                    </div>
                </form>
            </div>
       
            <ListAttendancesCards items={attendances}/>
            
            <ModalRegisterAttendance evento={evento}/>
            
        </>
    );
}

export default MyAttendances;