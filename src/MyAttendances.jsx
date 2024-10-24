import ListAttendancesCards from './ListAttendancesCards';
import ModalRegisterAttendance from './ModalRegisterAttendance';
import { NavLink } from "react-router-dom";

const MyAttendances = () => {
    const handleRegisterAttendance = () => {
        const modal = new bootstrap.Modal(document.getElementById('modalRegisterAttendance'));
        modal.show();
    }

    return (
        <>
            <h1 className='pt-5 pb-3'>Minhas Presenças</h1>
            <p>Aqui você pode visualizar suas presenças e gerar seus certificados.</p>

            <div className="d-flex mt-5">
                <form action="" className="w-50">
                    <div className="input-group" >
                        <input type="text" className="form-control" placeholder="Identificador do Evento" />
                        <button className="btn btn-outline-primary" type="button" id="idCarteira" onClick={() => handleRegisterAttendance()}>
                            <i className="bi bi-person-add pe-2"></i>
                            Registrar Presença
                        </button>
                    </div>
                </form>
            </div>
       
            <ListAttendancesCards />
            <ModalRegisterAttendance />
        </>
    );
}

export default MyAttendances;