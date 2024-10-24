import React, { useState } from 'react';

const ModalRegisterAttendance = () => {
    const [isChecked, setIsChecked] = useState(false); 

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="modal fade" id="modalRegisterAttendance" data-bs-backdrop="static" data-bs-keyboard="true" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Deseja registrar presença no evento?</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <h5>Título Evento</h5>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quia inventore laudantium placeat necessitatibus beatae ducimus delectus nemo quod, sequi a earum tempora assumenda corrupti!</p>

                        <p className="">
                            <strong>Carga Horária:</strong> 2 horas
                        </p>
                        <div className="d-flex flex-column ">
                            <p className=" mb-1">
                                <i className="bi bi-calendar2-event-fill pe-2"></i>24/10/2024
                            </p>
                            <p className="">
                                <i className="bi bi-clock-fill pe-2"></i>13:00
                            </p>
                        </div>
                        <div className="form-check small fst-italic">
                            <input className="form-check-input" type="checkbox" value="" id="checkAgree"  onChange={handleCheckboxChange}/>
                            <label className="form-check-label" htmlFor="checkAgree">
                                Entendo que uma vez confirmada a presença, ela será registrada na blockchain e não poderá ser alterada. 
                            </label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal" disabled={!isChecked}>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRegisterAttendance