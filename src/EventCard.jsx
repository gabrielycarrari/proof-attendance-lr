const EventCard = () => {
    return (
        <>  
        <div className="col-sm-4 mb-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Título Evento</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quia inventore laudantium placeat necessitatibus beatae ducimus delectus nemo quod, sequi a earum tempora assumenda corrupti!</p>
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