import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import {DateFormatter, StringFormatter } from './js/formatters';
import ModalConfirm from "./ModalConfirm";
import api from './js/axiosApi';


const EventDetails = () => {
    const [evento, setEvento] = useState(null);
    // const [loading, setLoading] = useState(true);
    const eventId = useParams().id;
    const navigate = useNavigate();

    useEffect(() => {
        // setLoading(true);
        const eventDetailsEndpoint = `obter_evento/${eventId}`;
        api.get(eventDetailsEndpoint)
            .then(response => {
                if (response.status === 200) {
                    setEvento(response.data);
                } else {
                    navigate("/my-events")
                }
            })
            .catch(error => {
                console.error('Erro ao carregar evento:', error);
                navigate("/my-events")
            })
            .finally(() => {
                // setLoading(false);
            });
    }, [eventId, navigate]);    

    if (!evento) {
        return <p>Carregando detalhes do evento...</p>;
    }

    const now = new Date();
    const data_inicio = new Date(`${event.data_inicio}T${event.hora_inicio}:00`);
    const data_fim = new Date(data_inicio); 
    data_fim.setHours(data_inicio.getHours() + event.carga_horaria); 

    let status = "";
    let badgeClass = "";
    if (now < data_inicio) {
        status = "Não Iniciado";
        badgeClass = "text-bg-primary";
    } else if (now >= data_inicio && now <= data_fim) {
        status = "Em Andamento";
        badgeClass = "text-bg-success";
    } else {
        status = "Finalizado";
        badgeClass = "text-bg-secondary";
    }

    const deleteEvento = (eventId) => {
        api.postForm("excluir_evento", {"id_evento": eventId})
            .then(response => {
                if (response.status === 204)
                    navigate("/my-events");
            })
            .catch(error => {
                console.error('Erro ao excluir evento:', error);
            })
            .finally(() => {
                // setLoading(false);
            });
    };

    const handleDeleteEvento = (eventoId) => {
        const modal = new bootstrap.Modal(document.getElementById('modalDeleteEvento'));
        modal.show();
    }

    return (
        <>
        <div>
            <h1 className="pt-5 pb-3">Detalhes Evento</h1>
            <div className="col my-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{StringFormatter.Capitalize(evento.nome)}</h5>

                        <p className="card-text">{evento.descricao}</p>

                        <p className="card-text">
                            <strong>Chave Única:</strong> {evento.chave_unica}
                        </p>

                        <p className="card-text">
                            <strong>Carga Horária:</strong> {evento.carga_horaria} horas
                        </p>
                        <div className="d-flex flex-column pb-3">
                            <p className="card-text mb-1">
                                <i className="bi bi-calendar2-event-fill pe-2"></i>{DateFormatter.format(data_inicio)}
                            </p>
                            <p className="card-text">
                                <i className="bi bi-clock-fill pe-2"></i>{evento.hora_inicio}
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className="">
                                <span className={`badge rounded-pill ${badgeClass} `}>{status}</span>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <Link to={`/edit-event/${evento.id}`} className="btn btn-outline-primary btn-sm" title="Alterar">
                                    <i className="bi bi-pencil-square pe-2"></i>Editar informações
                                </Link>
                                <button className="btn btn-outline-danger btn-sm ms-1" title="Excluir" onClick={() => handleDeleteEvento(evento.id)}>
                                    <i className="bi bi-trash"></i>Excluir Evento
                                </button>
                            </div>
                        </div>

                        <hr className="pt-3" />
                        <h5 className="card-title">Participantes:</h5>
                        <p className="card-text text-secondary"> Total: 3</p>
                            
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Participante 1</li>
                            <li className="list-group-item">Participante 2</li>
                            <li className="list-group-item">Participante 3</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        <ModalConfirm modalId="modalDeleteEvento" question="Deseja realmente excluir o envento?" confirmAction={() => deleteEvento(evento.id)} />
        </>
    );
}

export default EventDetails;