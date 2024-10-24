const EventDetails = () => {
    return (
        <div>
            <h1 className="pt-5 pb-3">Detalhes Evento</h1>
            <div className="col my-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Título Evento</h5>

                        <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quia inventore laudantium placeat necessitatibus beatae ducimus delectus nemo quod, sequi a earum tempora assumenda corrupti!</p>

                        <p className="card-text">
                            <strong>Carga Horária:</strong> 2 horas
                        </p>
                        <div className="d-flex flex-column pb-3">
                            <p className="card-text mb-1">
                                <i className="bi bi-calendar2-event-fill pe-2"></i>24/10/2024
                            </p>
                            <p className="card-text">
                                <i className="bi bi-clock-fill pe-2"></i>13:00
                            </p>
                        </div>
                        <div className="pb-3">
                            <span className="badge rounded-pill text-bg-primary">Não Iniciado</span>
                        </div>
                        <button className="btn btn-outline-primary btn-sm ">
                            <i className="bi bi-pencil-square pe-2"></i>Editar informações
                        </button>
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
    );
}

export default EventDetails;