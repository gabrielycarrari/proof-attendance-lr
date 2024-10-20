const EventCardAndamento = () => {
    // Arquivo criado apenas para apresentação do frontend
    return (
        <>  
        <div className="col-sm-6 col-md-4 mb-3 ">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">Título Evento</h5>
                        <span className="badge rounded-pill text-bg-success mb-2">Em Andamento</span>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, similique pariatur? Consectetur pariatur obcaecati ab.</p>
                    <div className="d-flex flex-column">
                        <p className="card-text mb-1" >
                            <i className="bi bi-calendar2-event-fill pe-2"></i>24/10/2024
                            <i className="bi bi-clock-fill pe-2 ps-4"></i>13:00
                        </p>
                        <p className="card-text mb-1">
                            <i className="bi bi-hourglass-split pe-2"></i>Carga Horária: 2h
                        </p>
                        <p className="card-text mb-2">
                            <i className="bi bi-people-fill pe-2"></i>Total Participantes: 3
                        </p>
                    </div>

                    <div className="d-flex justify-content-end">
                        <a href="/event-details" className="btn btn-outline-primary text-end">Ver Detalhes</a>
                    </div>
                </div>
            </div>
        </div>       
        </>
    );
}

export default EventCardAndamento;