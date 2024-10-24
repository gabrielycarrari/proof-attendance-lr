import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        
        <nav className="navbar navbar-expand navbar-dark bg-dark p-4">
            <div className="container-fluid">
                <div className="nav navbar-nav">
                    <NavLink className="nav-item nav-link mt-1" to="/">
                        <img src="src\assets\icon2.png" alt="" width="40" height="40" className="d-inline-block align-center me-3" />
                        CertifyMe
                    </NavLink>

                    <div className="nav navbar-nav d-flex align-items-center">
                    <NavLink className="nav-item nav-link" to="/my-events">Meus Eventos</NavLink>
                    <NavLink className="nav-item nav-link" to="/my-attendances">Minhas Presenças</NavLink>
                </div>
                </div>
                <div className="ml-auto"> 
                    <NavLink className="nav-item nav-link" to="/login">
                        <button className="btn btn-outline-light px-4" type="submit">
                            <i className="bi bi-person-fill pe-2"></i>
                            Login
                        </button>
                    </NavLink>
                </div>
            </div>
        </nav>

    )
}

export default Header;