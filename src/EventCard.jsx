/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { DateFormatter, StringFormatter } from "./js/formatters"


const EventCard = ({item}) => {
    const now = new Date();
    const data_inicio = new Date(`${item.data_inicio}T${item.hora_inicio}`);
    const data_fim = new Date(data_inicio); 
    data_fim.setHours(data_inicio.getHours() + item.carga_horaria); 

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
    return (
        <>  
        <div className="col-sm-6 col-md-4 mb-3 ">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{StringFormatter.Capitalize(item.nome)}</h5>
                        <span className={`badge rounded-pill ${badgeClass} mb-2`}>{status}</span>
                    </div>
                    <p className="card-text">{item.descricao}</p>
                    <div className="d-flex flex-column">
                        <p className="card-text mb-1" >
                            <i className="bi bi-calendar2-event-fill pe-2"></i>{DateFormatter.format(data_inicio)}
                            <i className="bi bi-clock-fill pe-2 ps-4"></i>{item.hora_inicio}
                        </p>
                        <p className="card-text mb-1">
                            <i className="bi bi-hourglass-split pe-2"></i>Carga Horária: {item.carga_horaria}h
                        </p>
                        <p className="card-text mb-2">
                            <i className="bi bi-people-fill pe-2"></i>Total Participantes: {item.qtd_participantes}
                        </p>
                    </div>

                    <div className="d-flex justify-content-end">
                        <Link to={`/my-events/${item.id}`} className="btn btn-outline-primary text-end ms-2" title="Alterar">Ver Detalhes
                        </Link>
                    </div>
                    
                    
                </div>
            </div>
        </div>       
        </>
    );
}

export default EventCard;