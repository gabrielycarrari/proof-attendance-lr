import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateFormatter, StringFormatter } from './js/formatters';
import { getUsuario } from './js/authService';
import api from "./js/axiosApi";

const ModalRegisterAttendance = ({ evento, onAttendanceRegistered }) => {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate(); 

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };


    const handleConfirmAttendance = async () => {;
        const user = getUsuario();

        if (user === null) {
            navigate("/login");
            return;
        }
        if (user.perfil !== 1) {
            //TODO: disparar erro
            navigate("/");
            return;
        }
        await api.post("/registrar_presenca", { 
            "id_participante": user.id,
            "id_evento": evento.id
        })
        .then((response) => {
            if (response.status === 200) {
                if (response.data) {
                    // TODO: Adicionar feedback de sucesso
                    console.log("Presença registrada com sucesso");
                    // window.location.reload();
                    setIsChecked(false);
                    onAttendanceRegistered(true, 'Presença registrada com sucesso!', 'success'); 
                    
                }
            } else {
                //TODO: Adicionar feedback de erro
                console.log("Error: " + response);
                setIsChecked(false);
                onAttendanceRegistered(false, 'Erro ao registrar presença.', 'danger');
            }
        })
        .catch((error) => {
            console.log(error.message);
            setIsChecked(false);
            onAttendanceRegistered(false, 'Erro ao registrar presença: ' + error.message, 'danger');
        });
    }

    let now = new Date();
    let data_inicio = '';

    if (evento) {
        data_inicio = new Date(`${evento.data_inicio}T${evento.hora_inicio}:00`);
        let data_fim = new Date(data_inicio); 
        data_fim.setHours(data_inicio.getHours() + evento.carga_horaria); 
    }

    return (
        <>
        
        <div className="modal fade" id="modalRegisterAttendance" data-bs-backdrop="static" data-bs-keyboard="true" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Deseja registrar presença no evento?</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <h5>{evento ? StringFormatter.Capitalize(evento.nome) : ''}</h5>

                        <p>{evento?.descricao}</p>

                        <p className="">
                            <strong>Carga Horária:</strong> {evento?.carga_horaria} horas
                        </p>
                        <div className="d-flex flex-column ">
                            <p className=" mb-1">
                                <i className="bi bi-calendar2-event-fill pe-2"></i>{evento ? DateFormatter.format(data_inicio) : ''}
                            </p>
                            <p className="">
                                <i className="bi bi-clock-fill pe-2"></i>{evento?.hora_inicio}
                            </p>
                        </div>
                        <div className="form-check small fst-italic">
                            <input className="form-check-input" type="checkbox" value="" id="checkAgree" onChange={handleCheckboxChange}/>
                            <label className="form-check-label" htmlFor="checkAgree">
                                Entendo que uma vez confirmada a presença, ela será registrada na blockchain e não poderá ser alterada. 
                            </label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" disabled={!isChecked} onClick={handleConfirmAttendance}>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModalRegisterAttendance