const EventCard = () => {
    return (
        <>  
        <div className="col-sm-4 mb-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Título Evento</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quia inventore laudantium placeat necessitatibus beatae ducimus delectus nemo quod, sequi a earum tempora assumenda corrupti!</p>
                    <div className="d-flex flex-column">
                        <p className="card-text mb-1" >
                            <i className="bi bi-calendar2-event-fill pe-2"></i>24/10/2024
                            <i className="bi bi-clock-fill pe-2 ps-4"></i>13:00
                            
                        </p>
                        <p className="card-text">
                            <i className="bi bi-hourglass-split pe-2"></i>Carga Horária: 2h
                        </p>
                    </div>

                    <div className="d-flex justify-content-end">
                        <a href="#" className="btn btn-outline-primary text-end">Ver Participantes</a>
                    </div>
                </div>
            </div>
        </div>       
        </>
    );
}

export default EventCard;